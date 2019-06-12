const router = require("express").Router();
const TweetController = require("../controllers/Tweet");
const TokenValidator = require("../middlewares/Auth");

router.get(
  "/tweet/:user_id/:page?",
  TokenValidator,
  TweetController.getFromUser
);

router.get(
  "/tweet/:user_id/following/:page",
  TokenValidator,
  TweetController.getFromFollowing
);

router.post("/tweet", TokenValidator, TweetController.create);

router.post("/tweet/:id/like", TokenValidator, TweetController.like);

router.post("/tweet/:id/comment", TokenValidator, TweetController.comment);

router.post("/tweet/:id/retweet", TokenValidator, TweetController.retweet);

router.delete("/tweet/:id", TokenValidator, TweetController.delete);

module.exports = server => server.use("/api", router);
