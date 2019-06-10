const Mongoose = require("../database/mongodb/MongoDB");

module.exports = new Mongoose.Schema({
  _id: false,
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  avatar: {
    type: String,
    required: true
  }
});
