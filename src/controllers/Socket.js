const UserModel = require("../models/User");
const connectedUsers = [];

function getSocketId({ email }) {
  for (const user of connectedUsers)
    if (user.email === email) return user.socketId;
  return null;
}

module.exports = new (class SocketController {
  saveConnection(user) {
    connectedUsers.push(user);
  }

  removeConnection(id) {
    const index = connectedUsers.findIndex(user => user.socketId == id);
    if (index !== -1) connectedUsers.splice(index, 1);
  }

  async tweet(socket, data) {
    try {
      const [user] = await UserModel.find({ email: data.email });

      for (const follower of user.followers) {
        const followerSocketId = getSocketId(follower);

        if (followerSocketId) {
          socket.broadcast
            .to(followerSocketId)
            .emit("message", "for your eyes only");
        }
      }
    } catch (error) {
      /**
       *
       */
    }
  }
})();
