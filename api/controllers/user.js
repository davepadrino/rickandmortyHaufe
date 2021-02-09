const bcrypt = require("bcrypt");
const User = require("../models/user");
const pick = require("lodash.pick");

const getUserById = (req, res) => {
  User.findById(req.params.id, (err, userDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    return res.json({ ok: true, user: userDB });
  });
};

const createUser = (req, res) => {
  const body = req.body;
  User.find({ email: body.email }, (_, data) => {
    if (data[0] != null) {
      return res.status(400).json({
        ok: false,
        err: "Email already taken",
      });
    }

    const user = new User({
      name: body.name,
      email: body.email,
      password: bcrypt.hashSync(body.password, 10),
    });

    user.save((err, userDB) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }

      return res.json({ ok: true, user: userDB });
    });
  });
};

const updateUser = (req, res) => {
  const id = req.params.id;
  const body = pick(req.body, "name", "email", "favorite");

  User.findByIdAndUpdate(id, body, { new: true }, (err, userDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    return res.json({ ok: true, user: userDB });
  });
};

module.exports = { getUserById, createUser, updateUser };
