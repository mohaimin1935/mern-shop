import mongoose from "mongoose"

const productSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, },
    img: { type: String },
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, required: true },
  },
  { timeStamps: true }
)

const Product = mongoose.model("Product", productSchema)

export default Product