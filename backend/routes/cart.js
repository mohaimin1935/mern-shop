import express from "express"
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../middlewares/verifyToken"
import Cart from "../models/Cart"

const router = express.Router()

// CREATE CART
router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body)
  try {
    const savedCart = await newCart.save()
    res.status(200).json(savedCart)
  } catch (error) {
    res.status(500).json(error)
  }
})

// UPDATE CART
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
    res.status(200).json(updatedCart)
  } catch (error) {
    res.status(500).json(error)
  }
})

// DELETE CART
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id)
    res.status(200).json("Cart deleted")
  } catch (error) {
    res.status(500).json(error)
  }
})

// GET USER CART
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId })
    if (!cart) return res.status(404).json("Cart not found")
    res.status(200).json(cart)
  } catch (error) {
    res.status(500).json(error)
  }
})

// GET ALL CARTS
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find()
    res.status(200).json(carts)
  } catch (error) {
    res.status(500).json(error)
  }
})

export default router