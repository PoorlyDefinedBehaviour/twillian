const ImageModel = require("../models/Image");

module.exports = new (class ImageController {
  async upload(request, response) {
    const image = await ImageModel.create({
      name: request.file.originalname,
      size: request.file.size,
      key: request.file.filename,
      url: ""
    });

    return response.json(image);
  }
})();
