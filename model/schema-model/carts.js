import mongoose, { Schema } from "mongoose";
import { Products } from "../models";

export const cartSchema = new Schema({
  cart_id: {
    type: mongoose.ObjectId,
    default: new mongoose.Types.ObjectId(),
  },
  product_id: {
    type: Schema.Types.ObjectId,
    ref: "Products",
  },
  quantity: {
    type: Number,
    required: true,
    max: 3,
  },
  totalPrice: {
    type: Number,
    required: true,
    max: 9,
  },
});
