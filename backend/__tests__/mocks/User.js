const RandomString = require("randomstring");

const MOCK_USER = {
  username: RandomString.generate(),
  email: RandomString.generate(),
  password: RandomString.generate()
};

module.exports = MOCK_USER;
