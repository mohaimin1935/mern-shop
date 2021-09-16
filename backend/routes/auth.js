import express from "express"
import CryptoJS from "crypto-js"
import User from "../models/User"
import jwt from "jsonwebtoken"

const router = express.Router()

// REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET_KEY).toString(),
  })

  try {
    const savedUser = await newUser.save()
    const { password, ...others } = savedUser._doc
    res.status(201).json(others)
  } catch (error) {
    res.status(500).json(error)
  }
})

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })

    if (!user) return res.status(401).json("Wrong Username")

    const decryptedPass = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY).toString(CryptoJS.enc.Utf8)
    if (decryptedPass !== req.body.password) return res.status(401).json("Wrong Password")

    const { password, ...others } = user._doc
    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin, },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "7d" }
    )

    res.status(200).json({...others, accessToken})

  } catch (error) {
    res.status(500).json(error)
  }

})

export default router