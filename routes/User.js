const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.get("/show", userController.getData);
router.get("/show/:userId", userController.getDataById);
router.post("/register", userController.createData);
router.post("/login", userController.createData);
router.put("/edit/:userId", userController.updateDataById);
router.delete("/delete/:userId", userController.deleteDataById);

module.exports = router;
