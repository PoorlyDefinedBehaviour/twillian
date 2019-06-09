require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const router = require("express").Router();
const UserValidator = require("../validators/User");
const UserModel = require("../models/User");

router.post("/signup", async (request, response) => {
  const result = UserValidator(request);
  if (result.error) {
    return response.status(422).json({ message: result.error.message });
  }

  if (await UserModel.findOne({ email: request.body.email })) {
    return response.status(400).json({ message: "email already in use" });
  }

  try {
    const user = await UserModel.create(request.body);

    user.password = null;

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: 3600
    });

    return response.send({ user, token });
  } catch (e) {
    return response
      .status(400)
      .json({ message: "couldnt create user", error: e });
  }
});

router.post("/login", async (request, response) => {
  const { email, password } = request.body;
  const user = await UserModel.findOne({ email }).select("+password");

  if (!user) {
    return response.status(400).send({ message: "Invalid credentials" });
  }

  if (!(await bcrypt.compare(password, user.password))) {
    return response.status(400).send({ message: "Invalid credentials" });
  }

  user.password = null;

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: 3600
  });

  return response.send({ user, token });
});

router.get("/user/:id?", async (request, response) => {
  const { id } = request.params;

  try {
    const users = await UserModel.find(id ? { _id: id } : null);

    const filteredUsers = users.map(user => ({
      _id: user._id,
      username: user.username,
      email: user.email
    }));

    return response.send(filteredUsers);
  } catch (e) {
    return response.status(404).send({ message: "user not found", error: e });
  }
});

router.patch("/user/:id", async (request, response) => {
  const id = request.params.id;
  if (!id) return response.status(400).json({ message: "user id is required" });

  const { body: payload } = request;
  try {
    return response.send(await UserModel.update({ _id: id }, payload));
  } catch (e) {
    return response
      .status(422)
      .json({ message: "couldn't update user", error: e });
  }
});

router.delete("/user/:id", async (request, response) => {
  const { id } = request.params;

  if (!id) return response.status(400).json({ message: "user id is required" });

  try {
    const result = await UserModel.deleteOne({ _id: id });
    return response.status(200).json({ message: "user deleted" });
  } catch (e) {
    return response
      .status(400)
      .json({ message: "couldn't delete user", error: e });
  }
});

module.exports = server => server.use("/api", router);
