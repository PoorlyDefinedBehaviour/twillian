const http = require("http");
const socketIO = require("socket.io");
const SocketController = require("../controllers/Socket");

const init = server => {
  const httpServer = http.createServer(server);
  const io = socketIO.listen(httpServer);

  io.on("connection", socket => {
    socket.on("newuser", SocketController.saveConnection);
    socket.on("disconnect", () => SocketController.removeConnection(socket.id));

    socket.on("notify-tweet", data => SocketController.tweet(socket, data));
  });
};

module.exports = server => init(server);
