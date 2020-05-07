const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order");

router.post("/create", orderController.createData);
router.get("/show", orderController.getAllData);

module.exports = router;
