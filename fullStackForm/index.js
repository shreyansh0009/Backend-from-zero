const express = require("express");
const path = require("path");
const app = express();
const userModel = require("./models/users");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/create", async (req, res) => {
  const { fullName, userName, email } = req.body;

  let createdUser = await userModel.create({
    name: fullName,
    username: userName,
    email,
  });

  res.redirect("/show");
});

app.get("/show", async (req, res) => {
  try {
    const users = await userModel.find();
    res.render("show", { users });
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/edit/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findById(id);
    res.render("edit", { user });
  } catch (err) {
    console.error("Error fetching user:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/edit/:id", async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (!user) return res.status(404).send("User not found");
    res.render("edit", { user });
  } catch (err) {
    console.error("Error fetching user for edit:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/edit/:id", async (req, res) => {
  const { fullName, userName, email } = req.body;
  try {
    await userModel.findByIdAndUpdate(req.params.id, {
      name: fullName,
      username: userName,
      email,
    });
    res.redirect("/show");
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).send("Failed to update user");
  }
});

app.post("/delete/:id", async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    res.redirect("/show");
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).send("Failed to delete user");
  }
});



app.listen(3001);
