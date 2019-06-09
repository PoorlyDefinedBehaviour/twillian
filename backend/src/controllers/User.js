const router = require("express").Router();
const UserValidator = require("../validators/User");
const UserModel = require("../models/User");

router.post("/user", async (request, response) => {
  const result = UserValidator(request);
  if (result.error) {
    return response.status(422).json({ error: result.error.message });
  }

  if (await UserModel.findOne({ email: request.body.email })) {
    return response.status(400).json({ error: "email already in use" });
  }

  try {
    const user = await UserModel.create(request.body);
    const filteredUser = {
      _id: user._id,
      username: user.username,
      email: user.email
    };

    response.send(filteredUser);
  } catch (e) {
    response.status(400).json({ error: "couldnt create user", dbError: e });
  }
});

router.get("/user/:id?", async (request, response) => {
  const { id } = request.params;

  try {
    const users = await UserModel.find({ _id: id });

    const filteredUsers = users.map(user => {
      return {
        _id: user._id,
        username: user.username,
        email: user.email
      };
    });

    return response.send(filteredUsers);
  } catch (e) {
    return response.status(404).send({ error: "user not found", dbError: e });
  }
});

router.patch("/user/:id", async (request, response) => {
  const user = request.params.id || null;
  if (!user) return response.status(400).json({ error: "user id is required" });

  const { body: payload } = request;
  try {
    return response.send(await UserModel.update({ _id: user }, payload));
  } catch (e) {
    return response
      .status(422)
      .json({ message: "couldn't update user", dbError: e });
  }
});

router.delete("/user/:id", async (request, response) => {
  const { id } = request.params;

  if (!id) return response.status(400).json({ error: "user id is required" });

  try {
    const result = await UserModel.deleteOne({ _id: id });
    return response.status(200).json({ message: "user deleted" });
  } catch (e) {
    return response
      .status(400)
      .json({ error: "couldn't delete user", dbError: e });
  }
});

module.exports = server => server.use("/api", router);
