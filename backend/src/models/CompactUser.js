const Mongoose = require("../database/mongodb/MongoDB");

module.exports = new Mongoose.Schema({
  _id: false,
  username: {
    type: String,
    required: true,
    unique: false
  },
  email: {
    type: String,
    required: true,
    unique: false
  },
  avatar: {
    type: String,
    required: true,
    unique: false
  }
});
