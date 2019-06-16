const jwt = require("jsonwebtoken");

const TokenDecoder = async BearerToken => {
  try {
    const token = BearerToken.split(" ")[1];
    return await jwt.verify(token, process.env.JWT_SECRET);
  } catch (e) {
    console.log(e);
    return null;
  }
};

const TokenValidator = async (request, response, next) => {
  try {
    const decoded = await TokenDecoder(request.headers.authorization);
    request.userId = decoded.id;
    next();
  } catch (e) {
    return response.status(401).json({ message: "auth failed" });
  }
};

module.exports = {
  TokenDecoder,
  TokenValidator
};
