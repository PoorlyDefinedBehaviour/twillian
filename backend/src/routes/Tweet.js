const router = require("express").Router();
const TweetController = require("../controllers/Tweet");
const TweetValidator = require("../middlewares/Tweet");

/**
 * TODO: Validate tweets
 */

router.get("tweet/:id", TweetController.getFromUser);

router.get("tweet/:id/following/:page", TweetController.getFollowing);

router.post("/tweet", TweetValidator, TweetController.create);

router.post("tweet/:id/like", TweetController.like);

router.post("tweet/:id/comment", TweetController.comment);

router.delete("/tweet/:id", TweetController.delete);

module.exports = server => server.use("/api", router);
