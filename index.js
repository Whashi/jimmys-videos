const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./Config/db.js");

dotenv.config({ path: "./Config/config.env" });

connectDB();

const user = require("./Routes/userRoute");
// const video = require("./Routes/videoRoute");

const app = express();

app.use(cors());

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/user/", user);
// app.use("/video/", video);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
