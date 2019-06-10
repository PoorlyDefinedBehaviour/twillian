const http = require("http");
const socketIO = require("socket.io");
const SocketController = require("../controllers/Socket");

const init = server => {
  const httpServer = http.createServer(server);
  const io = socketIO(httpServer);

  httpServer.listen(process.env.HTTP_PORT, () =>
    console.log(
      `Web socket http server listening on port: ${process.env.HTTP_PORT}`
    )
  );

  io.on("connection", socket => {
    console.log("socket connected");
    /**
     * Controller events
     */
  });
};

module.exports = server => init(server);
