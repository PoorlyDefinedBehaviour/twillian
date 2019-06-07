const router = require("express").Router();
const UserModel = require("../models/User");

router.post("/register", async (request, response) => {
  try {
    if (await UserModel.findOne(request.body.email))
      return response.status(400).send({ error: "Email already in use" });

    const user = await User.create(req.body);
    user.password = null;

    return response.send({ user });
  } catch (error) {
    return response.status(400).send({ error: "Registration failed" });
  }
});

module.exports = server => server.use("/auth", router);
