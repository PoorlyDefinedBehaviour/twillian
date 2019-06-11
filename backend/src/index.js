require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("./middlewares/Cors");
const server = express();

module.exports = (async function main() {
  server.use(express.json());
  server.use(cors);
  server.use("/files", express.static(path.resolve(__dirname, "uploads")));
  server.use("/socket", express.static(path.resolve(__dirname, "public")));

  require("./routes/User")(server);
  require("./routes/Image")(server);
  require("./socket/socketio")(server);

  server
    .listen(process.env.EXPRESS_PORT || 8080, () =>
      console.log(`Listening on PORT ${process.env.EXPRESS_PORT}`)
    )
    .on("error", error => console.log(error));

  process.on("uncaughtException", error => console.log(error));
})();
