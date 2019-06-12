const router = require("express").Router();
const UserValidator = require("../middlewares/User");
const UserController = require("../controllers/User");

router.get("/user/:id?", UserController.get);

router.post("/signup", UserValidator, UserController.signup);

router.post("/login", UserController.login);

router.patch("/user/:id", UserController.patch);

router.delete("/user/:id", UserController.delete);

module.exports = server => server.use("/api", router);
