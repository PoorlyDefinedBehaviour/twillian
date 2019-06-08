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
    const EXPECTED = {
      _id: "5cfc2320f5df531b54d3bd30",
      username: "eidewijiwidwjiee",
      email: "keoekfofewkfoekee"
    };

    const USER_ID = "5cfc2320f5df531b54d3bd30";
    const { data } = await axios.get(`${LOCAL_HOST}/api/user/${USER_ID}`);
    console.log(data);
    assert.deepEqual(data[0], EXPECTED);
  });

  it("should delete a user from the database", async () => {
    const MOCK_USER = UserFactory();

    const { data: user } = await axios.post(
      `${LOCAL_HOST}/api/user`,
      MOCK_USER
    );

    const result = await axios.delete(`${LOCAL_HOST}/api/user/${user._id}`);
  });
});
