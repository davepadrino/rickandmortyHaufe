const jwt = require("jsonwebtoken");

const checkToken = (req, res, next) => {
  const token = req.get("Authorization");
  jwt.verify(token, process.env.SEED, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err: "You must have been logged in",
      });
    }

    req.user = decoded.user;
    next();
  });
};

module.exports = {
  checkToken,
};
