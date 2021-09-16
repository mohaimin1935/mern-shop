import express from "express"
import CryptoJS from "crypto-js"
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../middlewares/verifyToken"
import User from "../models/User"

const router = express.Router()

// UPDATE USER
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET_KEY
    ).toString()
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
    res.status(200).json(updatedUser)
  } catch (error) {
    res.status(500).json(error)
  }
})

// DELETE USER
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json("User deleted")
  } catch (error) {
    res.status(500).json(error)
  }
})

// GET USER
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json("User not found")
    const { password, ...others } = user._doc
    res.status(200).json(others)
  } catch (error) {
    res.status(500).json(error)
  }
})

// GET ALL USERS
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new
  try {
    const users = query ?
      await User.find().sort({ _id: -1 }).limit(10) :
      await User.find()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json(error)
  }
})

// GET USER STATS
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date()
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      { $project: { month: { $month: "$createdAt" } } },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 }
        }
      },
    ])

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
})

export default router