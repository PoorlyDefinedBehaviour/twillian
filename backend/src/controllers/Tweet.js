const TweetModel = require("../models/Tweet");

module.exports = new (class TweetController {
  async getFromUser(request, response) {
    try {
      return response.json(await TweetModel.find({ _id: request.params.id }));
    } catch (error) {
      return response
        .status(422)
        .json({ message: "couldn't get tweets", error });
    }
  }

  async getFollowing(request, response) {
    /**
     * Get by id and page
     */
    try {
      //const user = await UserModel.find({ _id: request.params.id });
    } catch (error) {
      return response
        .status(422)
        .json({ message: "couldn't get tweets", error });
    }
  }

  async create(request, response) {
    try {
      /**
       * Link tweet to user before saving
       */
      return response.json(await TweetModel.create(request.body));
    } catch (error) {
      return response
        .status(422)
        .json({ message: "couldn't create tweet", error });
    }
  }

  async delete(request, response) {
    try {
      return await TweetModel.delete({});
    } catch (error) {
      return response
        .status(422)
        .json({ message: "couldn't delete tweet", error });
    }
  }

  async like(request, response) {
    /**
     * Toggle tweet like by id
     */
  }

  async comment(request, response) {
    /**
     * Comment on tweet by id
     */
  }
})();
