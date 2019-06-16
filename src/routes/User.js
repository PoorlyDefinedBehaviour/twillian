const router = require("express").Router();
const UserValidator = require("../middlewares/User");
const TokenValidator = require("../middlewares/Auth");
const UserController = require("../controllers/User");

router.get("/search/:username", TokenValidator, UserController.search);

router.get("/user/:id", TokenValidator, UserController.get);

router.post("/signup", UserValidator, UserController.signup);

router.post("/login", UserController.login);

router.post("/user/:id/follow", TokenValidator, UserController.follow);

router.patch("/user", TokenValidator, UserController.patch);

router.delete("/user", TokenValidator, UserController.delete);

module.exports = server => server.use("/api", router);
