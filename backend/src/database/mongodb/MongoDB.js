require("dotenv").config();
const ICrud = require("../interfaces/ICrud.interface");
const Mongoose = require("mongoose");

class MongoDB extends ICrud {
  constructor(connection, schema) {
    super();
    this.connection = connection;
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
      process.env.MONGODB_URL,
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
}

module.exports = MongoDB;
