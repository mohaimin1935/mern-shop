import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRoute from "./routes/user"
import authRoute from "./routes/auth"
import productRoute from "./routes/product"
import cartRoute from "./routes/cart"
import orderRoute from "./routes/order"

const app = express()

dotenv.config()

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to db"))
  .catch(e => console.log(e))

app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)
app.use("/api/carts", cartRoute)
app.use("/api/orders", orderRoute)

app.listen(process.env.PORT || 5000, () => console.log("Running"))