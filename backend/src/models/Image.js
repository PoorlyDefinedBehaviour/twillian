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

Image.pre("save", function() {
  if (!this.url) {
    this.url = `${process.env.HOST}${process.env.PORT}/files/${this.key}`;
  }
});

module.exports = Mongoose.model("Image", Image);
