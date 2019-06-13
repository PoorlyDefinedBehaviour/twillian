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

describe("tweet routes test suite", function() {
  this.beforeAll(async () => {});

  it("should post a new tweet", async () => {
    const tweet = {
      content: "hello world"
    };
    const { data, status } = await axios.post(`${LOCAL_HOST}/api/tweet`, tweet);
    MOCK_TWEET = data;

    assert.ok(status === 200);
  });

  it("should get a tweet by user id", async () => {
    const {
      data: [tweet]
    } = await axios.get(`${LOCAL_HOST}/api/tweet/${MOCK_USER._id}`);

    assert.ok(tweet.content === MOCK_TWEET.content);
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
