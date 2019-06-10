require("dotenv").config();
const path = require("path");
const express = require("express");
const server = express();
const cors = require("./middlewares/Cors");

module.exports = (async function main() {
  server.use(express.json());
  server.use(cors);
  server.use("/files", express.static(path.resolve(__dirname, "uploads")));

  require("./routes/User")(server);
  require("./routes/Image")(server);

  server
    .listen(process.env.PORT || 8080, () =>
      console.log(`Listening on PORT ${process.env.PORT}`)
    )
    .on("error", error => console.log(error));

  process.on("uncaughtException", error => console.log(error));
})();
