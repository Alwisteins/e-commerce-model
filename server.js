//basic konfigurasi express
import express from "express";
import cors from "cors";
import helmet from "helmet";
const app = express();
const PORT = process.env.PORT !== undefined ? process.env.PORT : 3000;

//middleware
app.use(cors());
app.use(helmet());

//aktivasi server db
import { init } from "./model/connect";
init();

//route halaman home
app.get("/", (req, res) => {
  res.send(console.log("Terhubung dengan server!"));
  res.status(200);
});

//route jika mengakses parameter yang tidak ada
app.use("/", (req, res) => {
  res.send("404notfound");
  res.status(404);
});

//aktifasi server dan port
app.listen(PORT, () => {
  console.log(`Server sedang berjalan di http://localhost:${PORT}`);
});
