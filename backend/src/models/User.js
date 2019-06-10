const Mongoose = require("../database/mongodb/MongoDB");
const bcrypt = require("bcryptjs");
const CompactUserModel = require("./CompactUser");
const TweetModel = require("./Tweet");

const User = new Mongoose.Schema({
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
  password: {
    type: String,
    required: true,
    select: false
  },
  avatar: {
    type: String,
    required: true
  },
  follows: {
    type: [CompactUserModel],
    required: true
  },
  followers: {
    type: [CompactUserModel],
    required: true
  },
  tweets: {
    type: [TweetModel],
    required: true
  },
  retweets: {
    type: [TweetModel],
    required: true
  },
  likes: {
    type: [TweetModel],
    required: true
  }
});

User.pre("save", async function(next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = Mongoose.model("User", User);
