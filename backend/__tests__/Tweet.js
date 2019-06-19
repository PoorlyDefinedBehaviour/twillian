require("dotenv").config();
const axios = require("axios");
const assert = require("assert");
const LOCAL_HOST = `http://localhost:${process.env.PORT}`;
const UserFactory = require("./factories/User");

const server = require("../src/index");

let MOCK_USER = {};
let MOCK_TWEET = {};

describe("tweet routes test suite", function() {
  this.beforeAll(async () => {
    const { data, status } = await axios.post(
      `${LOCAL_HOST}/api/signup`,
      UserFactory()
    );
    MOCK_USER = data.user;

    axios.defaults.headers.common = {
      Authorization: `Bearer ${data.token}`
    };
  });

  it("should post a new tweet", async () => {
    const tweet = {
      content: "hello world"
    };
    const { data, status } = await axios.post(`${LOCAL_HOST}/api/tweet`, tweet);
    MOCK_TWEET = data.tweet;

    assert.ok(status === 200);
  });

  it("should get a tweet by user id", async () => {
    const { status } = await axios.get(
      `${LOCAL_HOST}/api/tweet/${MOCK_USER._id}`
    );

    assert.ok(status === 200);
  });

  it("should like a tweet by id", async () => {
    const { status } = await axios.post(
      `${LOCAL_HOST}/api/tweet/${MOCK_TWEET._id}/like`
    );

    assert.ok(status === 200);
  });

  it("should comment on a tweet by id", async () => {
    const comment = {
      content: "nice comment lulw"
    };

    const { status } = await axios.post(
      `${LOCAL_HOST}/api/tweet/${MOCK_TWEET._id}/comment`,
      comment
    );

    assert.ok(status === 200);
  });

  it("should retweet a tweet by id", async () => {
    const { status } = await axios.post(
      `${LOCAL_HOST}/api/tweet/${MOCK_TWEET._id}/retweet`
    );
    assert.ok(status === 200);
  });

  it("should delete a tweet", async () => {
    const { status } = await axios.delete(
      `${LOCAL_HOST}/api/tweet/${MOCK_TWEET._id}`
    );
    assert.ok(status === 200);
  });
});
