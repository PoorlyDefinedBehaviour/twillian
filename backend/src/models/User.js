const Mongoose = require("../database/mongodb/MongoDB");
const bcrypt = require("bcryptjs");
/*
User {
    _id:  ... ,
    username: String,
    email: String,
    password: String,
    avatar: String (amazon link),
    follows: [User Array],
    followers: [User Array], 
    tweets: [{
                content: String,
                media: String (amazon link),
                retweets: [User Array],
                likes: [User Array],
                comments: [Comment Array]
            }
    ],
    retweets: Array,
    likes: Array
}
*/

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
  }
});

User.pre("save", async function(next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = Mongoose.model("User", User);
