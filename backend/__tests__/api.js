const MongoDB = require("../src/database/mongodb/MongoDB");
const MOCK_USER = require("./mocks/User");
const UserController = require("../src/controllers/User");

describe("api test suite", function() {
  this.beforeAll(async () => {
    if (!MongoDB.is_connected()) await MongoDB.connect();
  });

  it("should add a user to the database", async () => {});
});
