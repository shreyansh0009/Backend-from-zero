import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { User } from "../models/user.model.js";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_PORT,
    credentials: true
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

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

//finding specific user by id
app.get("/api/users/edit/:id", async (req, res) => {
  try {
    const {id} = req.params
    const user = await User.findById(id)
    if(!user) {
      res.status(401, "Wrong id!")
    }
    res.json(user)
  } catch (error) {
    res.status(500).json({
      message: "Error fetching users!",
      error: error?.message,
    });
  }
})

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

app.put("/api/users/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { username, fullName } = req.body;

    if (!username || !fullName) {
      return res.status(400).json({ message: "Both fields are required!" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { username, fullName },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found!" });
    }

    res.status(200).json({ message: "User updated!", updatedUser });
  } catch (error) {
    console.error("Error updating user!", error);
    res.status(500).json({ message: "Something wend wrong!" });
  }
});

app.delete("/api/users/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found!" });
    }
    res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Something went wrong!" });
  }
});

export { app };
