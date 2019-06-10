const Mongoose = require("../database/mongodb/MongoDB");
const CompactUserModel = require("./CompactUser");
const CommentModel = require("./Comment");

module.exports = new Mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  media: String,
  retweets: {
    type: [CompactUserModel],
    required: true
  },
  likes: {
    type: [CompactUserModel],
    required: true
  },
  comments: {
    type: [CommentModel],
    required: true
  }
});
