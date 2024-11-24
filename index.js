require("dotenv").config();
const cors = require("cors");
const express = require("express");

const cookieParser = require("cookie-parser");
const path = require("path");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const postRoute = require("./routes/post");
const commentRoute = require("./routes/comment");
const { connectToMongoDB } = require("./db/connectToMongoDB");
const app = express();

const port = process.env.PORT || 8888;
app.use(cors());

app.use(express.json());

app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/comment", commentRoute);

app.use(express.static(path.join(__dirname, "..", "client", "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
});

app.listen(port, () => {
  connectToMongoDB();
  console.log("Server is running on port", port);
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
