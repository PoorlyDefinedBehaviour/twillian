const Mongoose = require("../database/mongodb/MongoDB");
const CompactUserModel = require("./CompactUser");

module.exports = new Mongoose.Schema({
  _id: false,
  content: {
    type: String,
    required: true
  },
  owner: {
    type: CompactUserModel,
    required: true
  }
});
