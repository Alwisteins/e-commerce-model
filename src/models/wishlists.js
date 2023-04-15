import mongoose, { Schema } from "mongoose";

export const wishlistSchema = new Schema({
  wishlist_id: {
    type: mongoose.ObjectId,
    default: new mongoose.Types.ObjectId(),
  },
  productName: {
    type: String,
    ref: "Products",
  },
  unitPrice: {
    type: Number,
    ref: "Products",
  },
  category: {
    type: String,
    ref: "Products",
  },
});
