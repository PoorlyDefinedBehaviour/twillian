require("dotenv").config();
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");

const router = require("express").Router();

router.post("/authenticate", async (request, response) => {
  const { email, password } = request.body;
  const user = await UserModel.findOne({ email }).select("+password");

  if (!user) {
    return response.status(400).send({ error: "Invalid credentials" });
  }

  if (!(await bcrypt.compare(password, user.password))) {
    return response.status(400).send({ error: "Invalid username or password" });
  }

  user.password = null;

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: 3600
  });

  response.send({ user, token });
});

module.exports = server => server.use("/auth", router);
