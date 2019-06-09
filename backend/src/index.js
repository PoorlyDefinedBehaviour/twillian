require("dotenv").config();
const express = require("express");
const server = express();

module.exports = (async function main() {
  server.use(express.json());

  require("./routes/User")(server);
  require("./routes/Image")(server);

  server
    .listen(process.env.PORT || 8080, () =>
      console.log(`Listening on PORT ${process.env.PORT}`)
    )
    .on("error", error => console.log(error));

  process.on("uncaughtException", error => console.log(error));
})();
