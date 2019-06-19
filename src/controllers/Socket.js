const { TokenDecoder } = require("../middlewares/Auth");
const UserModel = require("../models/User");

class SocketController {
  constructor(ioInstance) {
    this.connectedUsers = [];
    this.io = ioInstance;
  }
  async saveConnection(socketId, token) {
    try {
      const { id: userId } = await TokenDecoder(token);
      if (userId) {
        this.connectedUsers.push({ socketId, userId });
      }
    } catch (error) {
      console.log(error);
    }
  }

  removeConnection(socketId) {
    const index = this.connectedUsers.findIndex(
      user => user.socketId == socketId
    );
    if (index !== -1) this.connectedUsers.splice(index, 1);
  }

  async tweet(socket, data) {
    try {
      const _id = this.getUserIdBySocketId(socket.id);

      if (!_id) return;

      const user = await UserModel.findOne({ _id });

      user.followers.forEach(follower => {
        const followerSocketId = this.getSocketIdByUserId(follower._id);
        if (followerSocketId) {
          this.io.to(`${followerSocketId}`).emit("tweet", data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  getSocketIdByUserId(userId) {
    const user = this.connectedUsers.find(user => user.userId === userId);

    return user ? user.socketId : null;
  }

  getUserIdBySocketId(socketId) {
    const user = this.connectedUsers.find(user => user.socketId === socketId);
    return user ? user.userId : null;
  }
}

module.exports = SocketController;
