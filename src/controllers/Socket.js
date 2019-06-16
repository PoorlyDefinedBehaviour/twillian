const { TokenDecoder } = require("../middlewares/Auth");
const UserModel = require("../models/User");
const connectedUsers = [];

module.exports = new (class SocketController {
  async saveConnection(user) {
    const _id = await DecodeToken(user.token);
    if (_id) {
      connectedUsers.push({ ...user, _id });
    }
  }

  removeConnection(socketId) {
    const index = connectedUsers.findIndex(user => user.socketId == socketId);
    if (index !== -1) connectedUsers.splice(index, 1);
  }

  async tweet(socket, data) {
    try {
      const _id = this.getUserId(socket.id);

      if (!_id) throw new Error("invalid socket or token");

      const user = await UserModel.findOne({ _id });

      user.followers.forEach(follower => {
        socket.broadcast
          .to(this.getSocketId(follower))
          .emit("tweet", { ...data, sentBy: user });
      });
    } catch (error) {
      console.log(error);
    }
  }

  getSocketId(userId) {
    return connectedUsers.find(user => user.socketId === userId);
  }

  getUserId(socketId) {
    const { _id } = connectedUsers.find(user => user.socketId === socketId);
    return _id;
  }
})();
