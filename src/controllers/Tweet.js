const TweetModel = require("../models/Tweet");
const RetweetModel = require("../models/Retweet");
const UserModel = require("../models/User");

class TweetController {
  async getFromUser(request, response) {
    const { user_id } = request.params;
    const { page = 1 } = request.query;
    try {
      const tweets = await TweetModel.paginate(
        { user: user_id },
        { populate: "user", sort: { createdAt: -1 }, page, limit: 10 }
      );

      return response.json(tweets);
    } catch (error) {
      console.log(error);
      return response.json({ message: "couldn't get tweets", error });
    }
  }

  async getFromFollowing(request, response) {
    try {
      const { user_id } = request.params;
      const currentUser = await UserModel.findOne({ _id: user_id });

      const { page = 1 } = request.query;
      const tweets = await TweetModel.paginate(
        { user: { $in: currentUser.following } },
        { populate: "user", sort: { createdAt: -1 }, page, limit: 10 }
      );

      return response.status(200).json(tweets);
    } catch (error) {
      console.log(error);
      return response
        .status(422)
        .json({ message: "couldn't get tweets", error });
    }
  }

  async create(request, response) {
    try {
      const tweet = await TweetModel.create({
        ...request.body,
        user: request.userId
      });

      return response.json({
        tweet
      });
    } catch (error) {
      console.log(error);
      return response
        .status(422)
        .json({ message: "couldn't create tweet", error });
    }
  }

  async delete(request, response) {
    try {
      const tweet = await TweetModel.findById(request.params.id).populate(
        "user"
      );

      if (!tweet)
        return response.status(404).json({ message: "tweet not found" });

      if (String(tweet.user._id) !== String(request.userId))
        return response.status(401).json({
          message: "you're not authorized to delete other users tweets"
        });

      return response.json(await tweet.delete());
    } catch (error) {
      console.log(error);
      return response.status(500).json({ message: "couldn't delete tweet" });
    }
  }

  async like(request, response) {
    try {
      const tweet = await TweetModel.findOne({
        _id: request.params.id
      }).populate("user");

      if (tweet.likes.includes(request.userId)) {
        tweet.likes.splice(tweet.likes.indexOf(request.userId), 1);
      } else {
        tweet.likes.push(request.userId);
      }

      return response.json(await tweet.save());
    } catch (error) {
      console.log(error);
      return response
        .status(422)
        .json({ message: "couldn't like tweet", error });
    }
  }

  async comment(request, response) {
    try {
      const tweet = await TweetModel.findById(request.params.id).populate(
        "user"
      );

      tweet.comments.push({ ...request.body, user: request.userId });

      return response.json(await tweet.save());
    } catch (error) {
      console.log(error);
      return response
        .status(422)
        .json({ message: "couldn't comment on tweet", error });
    }
  }

  async retweet(request, response) {
    try {
      const tweet = await TweetModel.findById(request.params.id).populate(
        "user retweets"
      );

      if (!tweet)
        return response.status(404).json({ message: "tweet not found" });

      if (tweet.user._id == request.userId)
        return response
          .status(401)
          .json({ message: "user can't like his own tweet" });

      const userHasRetweeted = !!tweet.retweets.find(
        retweet => retweet.user == request.userId
      );

      if (userHasRetweeted) {
        const index = tweet.retweets.findIndex(
          retweet => retweet.user_id == request.userId
        );

        tweet.retweets.splice(index, 1);

        await RetweetModel.findOneAndDelete({ user: request.userId });
      } else {
        const retweet = await RetweetModel.create({
          user: request.userId,
          tweet: tweet._id
        });

        tweet.retweets.push(retweet._id);
      }

      await tweet.save();
      return response.json(
        await TweetModel.findById(request.params.id).populate("user retweets")
      );
    } catch (error) {
      console.log(error);
      return response.status(422).json({ message: "couldn't retweet", error });
    }
  }

  async getRetweets(request, response) {
    try {
      const { user_id } = request.params;
      const { page = 1 } = request.query;

      const retweets = await RetweetModel.paginate(
        { user: user_id },
        { populate: "user", sort: { createdAt: -1 }, page, limit: 10 }
      );

      return response.json(retweets);
    } catch (error) {
      console.log(error);
      return response.status(404).json({ message: "couldn't find retweets" });
    }
  }
}

module.exports = new TweetController();
