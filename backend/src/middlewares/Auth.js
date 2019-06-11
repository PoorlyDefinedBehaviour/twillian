const jwt = require("jsonwebtoken");

module.exports = async (request, response, next) => {
  try {
    const token = request.headers.authorization.split(" ")[1];
    request.userData = await jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (e) {
    return response.status(401).json({ message: "auth failed" });
  }
};
