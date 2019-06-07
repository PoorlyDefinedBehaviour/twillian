const UserModel = require("../models/User");
const MongoDB = require("../database/mongodb/MongoDB");

class UserController {
  constructor() {
    this.database = new MongoDB(UserModel);
  }

  create(document) {
    return this.database.create(document);
  }

  read(id) {
    return this.database.find(id);
  }

  update(id, data) {
    return this.database.updateOne(
      { _id: id },
      { $set: { title: data.title } }
    );
  }

  delete(id) {
    return this.database.deleteOne({ _id: id });
  }
}

module.exports = UserController;
