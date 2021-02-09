const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  apiId: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Character", characterSchema);
