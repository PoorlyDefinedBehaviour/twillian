const Mongoose = require("../database/mongodb/MongoDB");
const aws = require("aws-sdk");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const s3 = new aws.S3();

const Image = new Mongoose.Schema(
  {
    name: String,
    size: Number,
    key: String,
    url: String,
    timestamp: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

Image.pre("save", function() {
  if (!this.url) {
    this.url = `${process.env.HOST}${process.env.PORT}/files/${this.key}`;
  }
});

Image.pre("remove", function() {
  if (process.env.STORAGE_TYPE === "s3") {
    return s3
      .deleteObject({
        Bucket: process.env.AWS_BUCKET,
        Key: this.key
      })
      .promise();
  }

  return promisify(
    fs.unlink
  )(path.resolve(__dirname, "..", "uploads", this.key));
});

module.exports = Mongoose.model("Image", Image);
