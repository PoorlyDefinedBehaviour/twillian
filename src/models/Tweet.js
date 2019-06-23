const Mongoose = require("../database/mongodb/MongoDB");
const mongoosePaginate = require("mongoose-paginate");

const TweetSchema = new Mongoose.Schema(
  {
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
        ref: "Retweet",
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
        createdAt: {
          type: Date,
          default: Date.now
        }
      }
    ],
    retweeted: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "Tweet"
    }
  },
  {
    timestamps: true
  }
);

TweetSchema.plugin(mongoosePaginate);

module.exports = Mongoose.model("Tweet", TweetSchema);
