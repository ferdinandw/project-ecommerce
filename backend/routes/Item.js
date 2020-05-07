const express = require("express");
const router = express.Router();
const multer = require("multer");
const itemController = require("../controllers/item");

const storage = multer.diskStorage({
  destinaton: (req, res, cb) => {
    cb(null, "/public/images/");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
});

router.get("/show", itemController.getAllData);
router.get("/show/:itemId", itemController.getDataById);
router.post("/create", upload.single("image"), itemController.createData);
router.put("/edit/:itemId", itemController.updateDataById);
router.delete("/delete/:itemId", itemController.deleteDataById);

module.exports = router;
