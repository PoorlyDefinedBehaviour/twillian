const ImageModel = require("../models/Image");
const UserModel = require("../models/User");

class ImageController {
  async upload(request, response) {
    try {
      const { url } = await ImageModel.create({
        name: request.file.originalname,
        size: request.file.size,
        key: request.file.key,
        url: request.file.location || ""
      });
  
      const user = await UserModel.findById(request.userId);
      user.avatar = url;
  
      await user.save();
  
      return response.json({ message: "image uploaded", url });
    } catch (error) {
      return response
        .status(422)
        .json({ message: "couldn't upload image", error });
    }
  }

  async delete(request, response) {
    try {
      const image = await ImageModel.findById(request.params.id);
      await image.remove();

      return response.status(200).json({ message: "image removed" });
    } catch (error) {
      return response
        .status(422)
        .json({ message: "couldn't delete image", error });
    }
  }
}

module.exports = new ImageController();
