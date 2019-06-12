const jwt = require("jsonwebtoken");

module.exports = async (request, response, next) => {
  try {
    const token = request.headers.authorization.split(" ")[1];
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    request.userId = decoded.id;
    next();
  } catch (e) {
    return response.status(401).json({ message: "auth failed" });
  }
};
