require("dotenv").config();
const Mongoose = require("mongoose");
Mongoose.set("useCreateIndex", true);

Mongoose.connect(
  process.env.MONGODB_CONNECTION_URL,
  { useNewUrlParser: true, keepAlive: true, keepAliveInitialDelay: 300000 },
  err => {
    if (err) throw err;
  }
);

module.exports = Mongoose;
