const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const UserModel = require("../models/User");

module.exports = new (class UserController {
  async get(request, response) {
    console.log(request.params);

    try {
      const user = await UserModel.findById(request.params.id).select(
        "-password"
      );
      return response.json(user);
    } catch (error) {
      return response.status(404).send({ message: "user not found", error });
    }
  }

  async signup(request, response) {
    if (await UserModel.findOne({ email: request.body.email })) {
      return response.status(422).json({ message: "email already in use" });
    }

    if (await UserModel.findOne({ username: request.body.username })) {
      return response.status(422).json({ message: "username already in use" });
    }

    try {
      const user = await UserModel.create(request.body);

      user.password = null;

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

      return response.send({ user, token });
    } catch (error) {
      return response
        .status(400)
        .json({ message: "couldnt create user", error });
    }
  }

  async login(request, response) {
    const { email, password } = request.body;
    const user = await UserModel.findOne({ email }).select("+password");

    if (!user) {
      return response.status(400).send({ message: "Invalid credentials" });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return response.status(400).send({ message: "Invalid credentials" });
    }

    user.password = null;

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    return response.send({ user, token });
  }

  async follow(request, response) {
    try {
      const currentUser = await UserModel.findById(request.userId);
      if (currentUser.following.includes(request.params.id)) {
        currentUser.following.splice(
          currentUser.following.indexOf(request.params.id),
          1
        );
      } else {
        currentUser.following.push(request.params.id);
      }
      await currentUser.save();

      const followedUser = await UserModel.findById(request.params.id);
      if (followedUser.followers.includes(request.userId)) {
        followedUser.followers.splice(
          followedUser.followers.indexOf(request.userId),
          1
        );
      } else {
        followedUser.followers.push(request.userId);
      }

      await followedUser.save();

      return response.status(200).json({ message: "user updated" });
    } catch (error) {
      return response
        .status(422)
        .json({ message: "couldn't follow user", error });
    }
  }

  async patch(request, response) {
    const id = request.userId;
    if (!id)
      return response.status(400).json({ message: "user id is required" });

    const { body: payload } = request;
    try {
      return response.send(await UserModel.update({ _id: id }, payload));
    } catch (error) {
      return response
        .status(422)
        .json({ message: "couldn't update user", error });
    }
  }

  async delete(request, response) {
    const { id } = request.userId;

    if (!id)
      return response.status(400).json({ message: "user id is required" });

    try {
      const result = await UserModel.deleteOne({ _id: id });
      return response.status(200).json({ message: "user deleted" });
    } catch (error) {
      return response
        .status(400)
        .json({ message: "couldn't delete user", error });
    }
  }
})();
