const ImageModel = require("../models/Image");

module.exports = new (class ImageController {
  async upload(request, response) {
    return response.json(
      await ImageModel.create({
        name: request.file.originalname,
        size: request.file.size,
        key: request.file.key,
        url: request.file.location || ""
      })
    );
  }

  async delete(request, response) {
    console.log(request.params.id);

    try {
      const image = await ImageModel.findById(request.params.id);
      await image.remove();

      return response.status(200).json({ message: "image removed" });
    } catch (e) {
      return response
        .status(422)
        .json({ message: "couldn't delete image", error: e });
    }
  }
})();
