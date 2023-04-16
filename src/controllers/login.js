import { Users } from "@/models";

// handler user login
const login = (req, res) => {
  const { email, username, password } = req.body;

  // validator data from user
  const loginQuery = async () => {
    // to validate data from user and data from collection
    const data = await Users.find({
      $and: [
        {
          $or: [{ username: { $eq: username } }, { email: { $eq: email } }],
        },
        {
          password: { $eq: password },
        },
      ],
    });
    return data;
  };
  loginQuery();

  if (!loginQuery().data) return res.send("data tidak ditemukan"); // jika data tidak ditemukan
  return res.send(loginQuery().data); // jika data tidak ditemukan
};
// aktifasi handler
login();
