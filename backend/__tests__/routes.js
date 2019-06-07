require("dotenv").config();
const axios = require("axios");
const assert = require("assert");
const MOCK_USER = require("./mocks/User");
const LOCAL_HOST = `http://localhost:${process.env.PORT}`;

const server = require("../src/index");

describe("routes test suite", function() {
  this.beforeAll(async () => {});

  it("should add a user to the database", async () => {
    const expected = {
      username: MOCK_USER.username,
      email: MOCK_USER.email
    };

    const { data } = await axios.post(`${LOCAL_HOST}/api/user`, MOCK_USER);
    assert.deepEqual(
      { id: data.id, username: data.username, email: data.email },
      expected
    );
  });

  it("should get a user by id from the database", async () => {
    const expected = {
      _id: "5cfac2a6c662a109f0188451",
      username: "0PLeNnmH8aMcBQjP7IDSq5mNMp2GvUp4",
      email: "qyj8mgnuNcuZ2KvYvu2Du2DRXY6ZgvWL"
    };

    const USER_ID = "5cfac2a6c662a109f0188451";
    const { data } = await axios.get(`${LOCAL_HOST}/api/user/${USER_ID}`);
    assert.deepEqual(data[0], expected);
  });

  it("should delete a user from the database", async () => {
    const USER_TO_DELETE = await axios.post(
      `${LOCAL_HOST}/api/user`,
      MOCK_USER
    );

    const result = await axios.delete(
      `${LOCAL_HOST}/api/user/${USER_TO_DELETE.id}`
    );
    console.log(result);
  });
});
