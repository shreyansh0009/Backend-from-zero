import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { User } from "../models/user.model.js";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_PORT
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello from back-end!");
});

//sending all the data to front-end
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching users!",
      error: error?.message,
    });
  }
});

// creating user in db
app.post("/api/users", async (req, res) => {
  try {
    const { username, fullName } = req.body;
    const user = await User.create({ username, fullName });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({
      message: "Error creatin user!",
      error: error?.message,
    });
  }
});

export { app };
