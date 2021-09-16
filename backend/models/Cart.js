import mongoose from "mongoose";

const cartSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productID: { type: String },
        quantity: { type: Number, default: 1 },
      }
    ]
  },
  { timestamps: true }
)

const Cart = mongoose.model("Cart", cartSchema)

export default Cart

