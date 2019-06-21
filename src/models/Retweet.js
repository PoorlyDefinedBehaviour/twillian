const Mongoose = require("../database/mongodb/MongoDB");
const mongoosePaginate = require("mongoose-paginate");

const RetweetSchema = new Mongoose.Schema(
  {
    user: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    tweet: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "Tweet",
      required: true
    }
  },
  {
    timestamps: true
  }
);

RetweetSchema.plugin(mongoosePaginate);

module.exports = Mongoose.model("Retweet", RetweetSchema);
