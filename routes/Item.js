const express = require("express");
const router = express.Router();
const itemController = require("../controllers/item");

router.get("/show", itemController.getAllData);
router.get("/show/:itemId", itemController.getDataById);
router.post("/create", itemController.createData);
router.put("/edit/:itemId", itemController.updateDataById);
router.delete("/delete/:itemId", itemController.deleteDataById);

module.exports = router;
