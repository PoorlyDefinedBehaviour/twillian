require("dotenv").config();
const axios = require("axios");
const assert = require("assert");
const LOCAL_HOST = `http://localhost:${process.env.PORT}`;
const UserFactory = require("./factories/User");

const server = require("../src/index");

describe("routes test suite", function() {
  this.beforeAll(async () => {});

  it("should add a user to the database", async () => {
    const MOCK_USER = UserFactory();
    const EXPECTED = { username: MOCK_USER.username, email: MOCK_USER.email };

    const { data } = await axios.post(`${LOCAL_HOST}/api/user`, MOCK_USER);
    const user = { username: data.username, email: data.email };

    assert.deepEqual(user, EXPECTED);
  });

  it("should get a user by id from the database", async () => {
    const { data: user } = await axios.post(
      `${LOCAL_HOST}/api/user`,
      UserFactory()
    );

    const EXPECTED = {
      ...user
    };

    const { data } = await axios.get(`${LOCAL_HOST}/api/user/${user._id}`);
    assert.deepEqual(data[0], EXPECTED);
  });

  it("should update a user by id on the database", async () => {
    const { data: user } = await axios.post(
      `${LOCAL_HOST}/api/user`,
      UserFactory()
    );

    const EXPECTED = {
      ...user,
      username: `${user.username}${Date.now()}`
    };

    const payload = { username: EXPECTED.username };

    const { data } = await axios.patch(
      `${LOCAL_HOST}/api/user/${user._id}`,
      payload
    );

    assert.ok(data.nModified == 1);
  });

  it("should delete a user from the database", async () => {
    const { data: user } = await axios.post(
      `${LOCAL_HOST}/api/user`,
      UserFactory()
    );

    const result = await axios.delete(`${LOCAL_HOST}/api/user/${user._id}`);
  });
});
