const router = require("express").Router();
const multer = require("multer");
const MulterConfig = require("../config/multer");
const TokenValidator = require("../middlewares/Auth");
const ImageController = require("../controllers/Image");

router.post(
  "/upload",
  TokenValidator,
  multer(MulterConfig).single("file"),
  ImageController.upload
);

router.delete("/image/:id", ImageController.delete);

module.exports = server => server.use("/api", router);
