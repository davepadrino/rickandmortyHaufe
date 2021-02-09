const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ ok: false, err: "Email and password are required" });
  }

  User.findOne({ email }, (err, user) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    if (!user) {
      return res.status(400).json({
        ok: false,
        err: {
          message: "Wrong user or not found",
        },
      });
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(400).json({
        ok: false,
        err: {
          message: "Wrong password",
        },
      });
    }

    const token = jwt.sign(
      {
        user,
      },
      process.env.SEED,
      { expiresIn: process.env.EXP_TOKEN }
    );

    return res.json({
      ok: true,
      user,
      token,
    });
  });
};

module.exports = { login };
