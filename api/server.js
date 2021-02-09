const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
require("./.env");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require("./controllers/index"));

app.get("/", (req, res) => {
  res.json("Hello!");
});

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      throw err;
    }
    console.log("DB Online");
  }
);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}...`);
});
