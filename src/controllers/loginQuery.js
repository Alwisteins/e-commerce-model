import { Users } from "@/models";
import { signUpQuery } from "./signUpQuery";

// find document where username/email and password
export const loginQuery = async () => {
  await Users.find({
    $and: [
      {
        $or: [
          { username: { $eq: signUpQuery.username } },
          { email: { $eq: signUpQuery.email } },
        ],
      },
      {
        password: { $eq: signUpQuery.password },
      },
    ],
  });
};

// jika data akun ketemu pada query diatas maka lanjutkan ke logika login akun
