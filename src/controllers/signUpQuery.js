// query pada bagian tabel signUp
import mongoose from "mongoose";
import { Users } from "@/models";
import { request } from "express";
// ini import tabel users buat validasi data
const { username, email, password, name, address } = request.payload; // ini data yang diinput user. *edited: request dapet darimana?

// validasi data yang diinput
export const signUpQuery = new Users({
  users_id: new mongoose.Types.ObjectId(),
  username,
  email,
  password,
  name,
  address,
});

// save data
signUpQuery.save((error, data) => {
  if (error) console.log(error);

  console.log(data);
  console.log("data berhasil diinput");
});
