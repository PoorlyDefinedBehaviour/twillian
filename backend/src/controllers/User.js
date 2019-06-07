const router = require("express").Router();
const { check, validationResult } = require("express-validator/check");
const UserModel = require("../models/User");

router.post("/user", async (request, response) => {
  /*
  check("username")
    .trim()
    .isAlphanumeric()
    .not()
    .isEmpty()
    .isLength({ min: 5, max: 10 });

  check("email")
    .trim()
    .isEmail()
    .normalizeEmail()
    .not()
    .isEmpty();

  check(password)
    .not()
    .isEmpty()
    .isLength({ min: 6, max: 255 });

  const errors = validationResult(request);

  if (!errors.isEmpty()) response.status(422).json({ errors: errors.array() });
  */

  const result = await UserModel.create(request.body);
  response.json({
    id: result._id,
    username: result.username,
    email: result.email
  });
});

router.get("/user/:id?", async (request, response) => {
  const { id } = request.params;

  response.send(await UserModel.find({ _id: id }));
});

router.delete("/user/:id", async (request, response) => {
  const { id } = request.params;

  if (!id) response.status(400).json({ error: "user id is required" });

  try {
    const result = await UserModel.deleteOne({ _id: id });
  } catch (e) {
    response.status(400).json({ error: "couldn't find use", databaseError: e });
  }
});

module.exports = server => server.use("/api", router);
