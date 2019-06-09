const router = require("express").Router();
const multer = require("multer");
const MulterConfig = require("../config/multer");
const ImageModel = require("../models/Image");
const TokenValidator = require("../middlewares/Auth");

router.post(
  "/image",
  TokenValidator,
  multer(MulterConfig).single("file"),
  async (request, response) => {
    const image = await ImageModel.create({
      name: request.file.originalname,
      size: request.file.size,
      key: request.file.filename,
      url: ""
    });

    return response.json(image);
  }
);

module.exports = server => server.use("/upload", router);
