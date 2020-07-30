const mongoose = require("mongoose");

const blackSchema = new mongoose.Schema({
  title: String,
  body: String,
  date: {
    type: String,
    default: Date.now(),
  },
});
const User = new mongoose.model("Black", blackSchema);
module.exports = User;
