import mongoose, { Schema } from "mongoose";

export const topupSchema = new Schema({
  topup_id: {
    type: mongoose.ObjectId,
    default: new mongoose.Types.ObjectId(),
  },
  saldo: {
    type: Number,
    default: 0,
    min: 1,
    max: 15,
  },
});
