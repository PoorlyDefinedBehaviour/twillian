const TweetModel = require("../models/Tweet");
const UserModel = require("../models/User");
const TWEETS_PER_PAGE = 20;

module.exports = new (class TweetController {
  async getFromUser(request, response) {
    const { user_id, page = 0 } = request.params;
    try {
      const tweets = await TweetModel.find({
        user: user_id
      })
        .populate("user")
        .sort("-createdAt")
        .skip(parseInt(page) * TWEETS_PER_PAGE)
        .limit(TWEETS_PER_PAGE);

      return response.json(tweets);
    } catch (error) {
      console.log(error);
      return response.json({ message: "couldn't get tweets", error });
    }
  }

  async getFromFollowing(request, response) {
    try {
      const { user_id, page } = request.params;
      const currentUser = await UserModel.findOne({ _id: user_id });

      const tweets = await TweetModel.find({
        user: { $in: currentUser.following }
      })
        .populate("user")
        .sort("-createdAt")
        .skip(parseInt(page) * TWEETS_PER_PAGE)
        .limit(TWEETS_PER_PAGE);

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
      await TweetModel.findByIdAndDelete(request.params.id);
      return response.json({ message: "tweet deleted" });
    } catch (error) {
      console.log(error);
      return response
        .status(422)
        .json({ message: "couldn't delete tweet", error });
    }
  }

  async like(request, response) {
    try {
      const tweet = await TweetModel.findOne({ _id: request.params.id });

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
      const tweet = await TweetModel.findById(request.params.id);

      tweet.comments.push({ ...request.body, user: request.userId });

      return response.json(await tweet.save());
    } catch (error) {
      return response
        .status(422)
        .json({ message: "couldn't comment on tweet", error });
    }
  }

  async retweet(request, response) {
    try {
      const tweet = await TweetModel.findById(request.params.id);

      if (tweet.retweets.includes(request.userId)) {
        tweet.retweets.splice(tweet.retweets.indexOf(request.userId), 1);
      } else {
        tweet.retweets.push(request.userId);
      }

      return response.json(await tweet.save());
    } catch (error) {
      return response.status(422).json({ message: "couldn't retweet", error });
    }
  }
})();
