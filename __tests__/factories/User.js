const RandomString = require("randomstring");
const axios = require("axios");
const LOCAL_HOST = `http://localhost:${process.env.PORT}`;
const UserModel = require("../../src/models/User");

class UserFactory {
  async registerOne() {
    const { data } = await axios.post(`${LOCAL_HOST}/api/signup`, {
      username: RandomString.generate(15),
      email: `${RandomString.generate(5)}@${RandomString.generate(5)}.com`,
      password: RandomString.generate(10),
      file: {
        originalname: RandomString.generate(10),
        size: Math.floor(Math.random() * 100),
        location: RandomString.generate(10),
        key: RandomString.generate(10),
        url: RandomString.generate(10)
      }
    });

    return {
      MOCK_USER: data,
      token: data.token
    };
  }

  async generateUser() {
    const user = {
      username: RandomString.generate(15),
      email: `${RandomString.generate(5)}@${RandomString.generate(5)}.com`,
      password: RandomString.generate(10),
      file: {
        originalname: RandomString.generate(10),
        size: Math.floor(Math.random() * 100),
        location: RandomString.generate(10),
        key: RandomString.generate(10),
        url: RandomString.generate(10)
      }
    };

    return user;
  }
}

module.exports = new UserFactory();
