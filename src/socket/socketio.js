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
    socket.on("newuser", SocketController.saveConnection);
    socket.on("disconnect", () => SocketController.removeConnection(socket.id));

    socket.on("notify-tweet", data => SocketController.tweet(socket, data));
  });
};

module.exports = server => init(server);
