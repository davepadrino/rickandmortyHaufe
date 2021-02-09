const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email required"],
  },
  password: {
    type: String,
    required: [true, "Password required"],
  },
  favorite: {
    type: [Schema.Types.ObjectID],
    ref: "Character",
  },
});

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;

  return userObject;
};

userSchema.plugin(uniqueValidator, { message: "{PATH} must be unique" });

module.exports = mongoose.model("User", userSchema);
