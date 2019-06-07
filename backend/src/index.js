require("dotenv").config();
const server = require("express")();

server.listen(8080, () => console.log(`Listening on PORT ${process.env.PORT}`));

server.get("/", (request, response) => response.send("gudang"));
