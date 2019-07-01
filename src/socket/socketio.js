const SocketController = require("../controllers/Socket");

const init = (server, io) => {
  const SController = new SocketController(io);

  io.on("connection", socket => {
    socket.on("userconnected", data => {
      SController.saveConnection(socket.id, data.token);
    });
    socket.on("disconnect", () => SController.removeConnection(socket.id));
    socket.on("new-tweet", data => SController.tweet(socket, data));
  });

  server
    .listen(process.env.PORT || 8080, process.env.HOST || "0.0.0.0", () =>
      console.log(`Listening on PORT ${process.env.PORT}`)
    )
    .on("error", error => console.log(error));
};

module.exports = (server, io) => init(server, io);
