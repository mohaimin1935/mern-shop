import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/auth";
import cartRoute from "./routes/cart";
import orderRoute from "./routes/order";
import productRoute from "./routes/product";
import chockoutRoute from "./routes/stripe";
import userRoute from "./routes/user";

const app = express();

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to db"))
  .catch((e) => console.log(e));

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", chockoutRoute);

app.listen(process.env.PORT || 5000, () => console.log("Running"));
