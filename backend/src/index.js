require("dotenv").config();
const express = require("express");
const server = express();

server.use(express.json());

server.listen(process.env.PORT, () =>
  console.log(`Listening on PORT ${process.env.PORT}`)
);

server.get("/", (request, response) => response.send("gudang"));
