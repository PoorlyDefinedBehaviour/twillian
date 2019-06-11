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
    required: true,
    unique: false
  },
  follows: {
    type: [CompactUserModel],
    required: true,
    unique: false
  },
  followers: {
    type: [CompactUserModel],
    required: true,
    unique: false
  },
  tweets: {
    type: [TweetModel],
    required: true,
    unique: false
  },
  retweets: {
    type: [TweetModel],
    required: true,
    unique: false
  },
  likes: {
    type: [TweetModel],
    required: true,
    unique: false
  }
});

User.pre("save", async function(next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = Mongoose.model("User", User);
