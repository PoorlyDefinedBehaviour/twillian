require("dotenv").config();
const Crud = require("../../interfaces/Crud");
const Mongoose = require("mongoose");

class MongoDB extends Crud {
  constructor(schema) {
    super();
    this.schema = schema;
  }

  create(document) {
    return this.schema.create(document);
  }

  read(id) {
    return this.schema.find(id);
  }

  update(id, data) {
    return this.schema.updateOne({ _id: id }, { $set: { title: data.title } });
  }

  delete(id) {
    return this.schema.deleteOne({ _id: id });
  }

  static connect() {
    Mongoose.connect(
      process.env.MONGODB_CONNECTION_URL,
      { useNewUrlParser: true },
      err => {
        if (err) throw err;
      }
    );

    Mongoose.connection.once("open", () => {
      console.log("Successfully connected to the database");
    });

    return Mongoose.connection;
  }

  static is_connected() {
    return Mongoose.connection ? true : false;
  }
}

module.exports = MongoDB;
