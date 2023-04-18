import { Users } from "@/models";

// handler user login
const login = (req, res) => {
  const { email, username, password } = req.body;

  // handler method get data user
  const getUser = async () => {
    // query to search data user from collection
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
  getUser();

  if (!getUser().data) return res.send("data tidak ditemukan"); // jika data tidak ditemukan
  return res.send(getUser().data); // jika data tidak ditemukan
};
login(); // aktifasi handler

// handler update data user
const updateUser = (req, res) => {
  const { email, username, password } = req.body;
  const findEmail = Users.findIndex((user) => user.email === email);
  const findUsername = Users.findIndex((user) => user.username === username);

  // update by email
  if (findEmail !== -1) {
    Users.updateOne({
      $set: {
        email,
        username,
        password,
      },
    });
    res
      .json({
        status: true,
        message: `user dengan email ${email} berhasil diperbarui`,
        data: Users,
        method: req.method,
        url: req.url,
      })
      .status(200);
  } else {
    res
      .json({
        status: false,
        message: `user dengan email ${email} tidak ditemukan`,
      })
      .status(404);
  }

  // update by username
  if (findUsername !== -1) {
    Users.updateOne({
      $set: {
        email,
        username,
        password,
      },
    });
    res
      .json({
        status: true,
        message: `user dengan username ${username} berhasil diperbarui`,
        data: Users,
        method: req.method,
        url: req.url,
      })
      .status(200);
  } else {
    res
      .json({
        status: false,
        message: `user dengan username ${username} tidak ditemukan`,
      })
      .status(404);
  }
};
updateUser(); //aktifasi handler
