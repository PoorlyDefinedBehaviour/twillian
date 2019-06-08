const router = require("express").Router();
const Joi = require("@hapi/joi");
const UserModel = require("../models/User");

const validate = request => {
  const schema = Joi.object()
    .keys({
      username: Joi.string()
        .alphanum()
        .min(5)
        .max(30)
        .required(),
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .min(5)
        .max(30)
        .required()
    })
    .without("password", "access_token");

  return Joi.validate(request.body, schema);
};

router.post("/user", async (request, response) => {
  const result = validate(request);
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
    console.log("filtered", filteredUsers);
    return response.send(filteredUsers);
  } catch (e) {
    return response.status(404).send({ error: "user not found", dbError: e });
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
