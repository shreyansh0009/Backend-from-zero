const express = require("express");
const app = express();

const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/create", async (req, res) => {
  const createdUser = await userModel.create({
    name: "Saurabh Shreyansh",
    username: "shreyansh",
    email: "shreyansh@gmail.com",
  });
  res.send(createdUser);
});

app.get("/read", async (req, res) => {
  const users = await userModel.find();
  res.send(users);
});

app.get("/update", async (req, res) => {
  const updatedUser = await userModel.findOneAndUpdate(
    {
      username: "shreyansh",
    },
    {
      username: "shreyansh0009",
    },
    {
      new: true,
    }
  );
  res.send(updatedUser);
});

app.get("/delete", async (req, res) => {
    const deletedUser = await userModel.findOneAndDelete({
        username: "rubi123"
    });
    res.send(deletedUser);
});
app.listen(3000);
