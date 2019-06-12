const RandomString = require("randomstring");

module.exports = () => ({
  username: RandomString.generate(15),
  email: `${RandomString.generate(5)}@${RandomString.generate(5)}.com`,
  password: RandomString.generate(15),
  avatar: RandomString.generate(10)
});
