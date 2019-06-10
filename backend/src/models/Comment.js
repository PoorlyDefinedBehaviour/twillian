const Mongoose = require("../database/mongodb/MongoDB");
const CompactUserModel = require("./CompactUser");

module.exports = new Mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  owner: {
    type: CompactUserModel,
    required: true
  }
});
