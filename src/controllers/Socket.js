const { TokenDecoder } = require("../middlewares/Auth");
const UserModel = require("../models/User");
const connectedUsers = [];

module.exports = new (class SocketController {
  async saveConnection(socketId, token) {
    const { id: userId } = await TokenDecoder(token);
    if (userId) {
      connectedUsers.push({ socketId, userId });
    }
  }

  removeConnection(socketId) {
    const index = connectedUsers.findIndex(user => user.socketId == socketId);
    if (index !== -1) connectedUsers.splice(index, 1);
  }

  async tweet(socket, data) {
    try {
      const _id = this.getUserId(socket.id);

      if (!_id) return;

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
    const user = connectedUsers.find(user => user.userId === userId);

    return user ? user.socketId : null;
  }

  getUserId(socketId) {
    const user = connectedUsers.find(user => user.socketId === socketId);
    return user ? user.userId : null;
  }
})();
