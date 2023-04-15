import mongoose from "mongoose";

const { Schema } = mongoose;

// schema untuk validasi data users
export const usersSchema = new Schema({
  users_id: {
    type: mongoose.ObjectId,
    default: new mongoose.Types.ObjectId(),
  },
  product_id: {
    type: Schema.Types.ObjectId,
    ref: "Products",
  },
  cart_id: {
    type: Schema.Types.ObjectId,
    ref: "Carts",
  },
  wishlist_id: {
    type: Schema.Types.ObjectId,
    ref: "Wishlists",
  },
  topup_id: {
    type: Schema.Types.ObjectId,
    ref: "Topup",
  },
  username: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },
  email: {
    type: String,
    required: true,
    maxLength: 50,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 20,
  },
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },
  address: {
    type: String,
    required: true,
    maxLength: 50,
  },
  wishlist: {
    type: Schema.Types.ObjectId,
    ref: "Wishlists",
  },
  cart: {
    type: Schema.Types.ObjectId,
    ref: "Wishlists",
  },
  photoProfile: String,
  saldo: {
    type: Number,
    ref: "Topup",
  },
});
