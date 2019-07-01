require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("./middlewares/Cors");
const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

module.exports = (async function main() {

  app.use((req, res, next) => {
    req.io = io;
  
    return next();
  });

  app.use(express.json());
  app.use(cors);
  app.use("/files", express.static(path.resolve(__dirname, "uploads")));

  require("./routes/User")(app);
  require("./routes/Image")(app);
  require("./routes/Tweet")(app);
  require("./socket/socketio")(server, io);

  process.on("uncaughtException", error => console.log(error));
})();
