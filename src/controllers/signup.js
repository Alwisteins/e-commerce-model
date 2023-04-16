import mongoose from "mongoose";
import { Users } from "@/models";

// handler user signup
const signup = (req, res) => {
  const { username, email, password, name, address } = req.body;

  // input data into docs
  const signUpQuery = new Users({
    users_id: new mongoose.Types.ObjectId(),
    username,
    email,
    password,
    name,
    address,
  });

  // saving data into collection
  const save = async () => {
    await signUpQuery.save((error, data) => {
      // message when data not saved
      if (error) res.send(error);

      // message when data successfully saved
      res.send(data);
      res.send("data berhasil diinput");
    });
    return signUpQuery;
  };
  save();
};
// aktifasi handler
signup();
