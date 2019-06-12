const Mongoose = require("../database/mongodb/MongoDB");

module.exports = Mongoose.model(
  "Tweet",
  new Mongoose.Schema({
    user: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    content: {
      type: String,
      required: true
    },
    media: String,
    retweets: [
      {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false
      }
    ],
    likes: [
      {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false
      }
    ],
    comments: [
      {
        content: {
          type: String,
          required: true
        },
        user: {
          type: Mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true
        },
        timestamp: {
          type: Date,
          default: Date.now
        }
      }
    ],
    timestamp: {
      type: Date,
      default: Date.now
    }
  })
);
