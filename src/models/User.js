const Mongoose = require("../database/mongodb/MongoDB");
const bcrypt = require("bcryptjs");

const User = new Mongoose.Schema(
  {
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
      required: false,
      unique: false,
      default: 'http://laurauinteriordesign.com/wp-content/uploads/2018/03/avatar-placeholder.png'
    },
    following: [
      {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false
      }
    ],
    followers: [
      {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false
      }
    ]
  },
  {
    timestamps: true
  }
);

User.pre("save", async function(next) {
  if (this.password && this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  next();
});

module.exports = Mongoose.model("User", User);
