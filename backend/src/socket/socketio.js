const SocketController = require("../controllers/Socket");

const init = app => {
  const httpServer = require("http").Server(app);
  const io = require("socket.io")(httpServer);
  const SController = new SocketController(io);

  io.on("connection", socket => {
    socket.on("userconnected", data => {
      SController.saveConnection(socket.id, data.token);
    });
    socket.on("disconnect", () => SController.removeConnection(socket.id));
    socket.on("new-tweet", data => SController.tweet(socket, data));
  });

  httpServer
    .listen(process.env.PORT || 8080, process.env.HOST || "0.0.0.0", () =>
      console.log(`Listening on PORT ${process.env.PORT}`)
    )
    .on("error", error => console.log(error));
};

module.exports = server => init(server);
