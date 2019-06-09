const Mongoose = require("../database/mongodb/MongoDB");

const Image = new Mongoose.Schema({
  name: String,
  size: Number,
  key: String,
  url: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = Mongoose.model("Image", Image);
