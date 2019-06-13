require("dotenv").config();
const axios = require("axios");
const assert = require("assert");
const LOCAL_HOST = `http://localhost:${process.env.PORT}`;
const UserFactory = require("./factories/User");

const server = require("../src/index");

const { MOCK_USER, token } = UserFactory.registerOne();
axios.defaults.headers.common = {
  Authorization: `Bearer ${token}`
};

describe("user routes test suite", function() {
  this.beforeAll(async () => {});

  it("should add a user to the database", async () => {
    const { status } = await axios.post(
      `${LOCAL_HOST}/api/signup`,
      UserFactory.generateUser()
    );

    assert.ok(status === 200);
  });

  it("should get a user from the database", async () => {
    const { data: user } = await axios.get(
      `${LOCAL_HOST}/api/user/${MOCK_USER._id}`
    );
    assert.ok(user._id === MOCK_USER._id);
  });

  it("should update a user by id on the database", async () => {
    const payload = {
      username: UserFactory.generateUser().username
    };
    const { data } = await axios.patch(`${LOCAL_HOST}/api/user`, payload);
    assert.ok(data.nModified === 1);
  });

  it("should follow a user", async () => {
    const { data } = await axios.post(
      `${LOCAL_HOST}/api/signup`,
      UserFactory.generateUser()
    );

    const { status } = await axios.post(
      `${LOCAL_HOST}/api/user/${data.user._id}/follow`
    );

    assert.ok(status === 200);
  });

  it("should delete a user from the database", async () => {
    const { status } = await axios.delete(`${LOCAL_HOST}/api/user`);
    assert.ok(status === 200);
  });
});
