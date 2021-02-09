const express = require("express");
const app = express();
const { checkToken } = require("../middlewares/auth");
const { login } = require("./login");
const {
  getCharacterById,
  getCharacters,
  getCharacterDetails,
} = require("./character");
const { getUserById, createUser, updateUser } = require("./user");

// Routes
app.post("/login", login);
app.get("/user/:id", checkToken, getUserById);
app.post("/user", createUser);
app.put("/user/:id", checkToken, updateUser);
app.get("/character/:id", checkToken, getCharacterById);
app.get("/characters", checkToken, getCharacters);
app.get("/character/:id/details", checkToken, getCharacterDetails);

module.exports = app;
