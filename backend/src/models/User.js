const Mongoose = require("mongoose");

const User = new Mongoose.Schema({
  username: String,
  email: String,
  password: String
});

module.exports = Mongoose.model("User", User);
