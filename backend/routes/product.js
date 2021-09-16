import express from "express"
import CryptoJS from "crypto-js"
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../middlewares/verifyToken"
import Product from "../models/Product"

const router = express.Router()

// CREATE PRODUCT
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const newProduct = await Product.create(req.body)
    res.status(200).json(newProduct)
  } catch (error) {
    res.status(500).json(error)
  }
})

// UPDATE PRODUCT
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
    res.status(200).json(updatedProduct)
  } catch (error) {
    res.status(500).json(error)
  }
})

// DELETE PRODUCT
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.status(200).json("Product deleted")
  } catch (error) {
    res.status(500).json(error)
  }
})

// GET PRODUCT
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) return res.status(404).json("Product not found")
    res.status(200).json(prduct)
  } catch (error) {
    res.status(500).json(error)
  }
})

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const latestQuery = req.query.new
  const categoryQuery = req.query.category
  try {
    let products

    if (latestQuery) {
      products = await Product.find().sort({createdAt: -1}).limit(10)
    } else if (categoryQuery) {
      products = await Product.find({categories: {$in: [categoryQuery]}})
    } else {
      products = await Product.find()
    }
    
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json(error)
  }
})

export default router