const express = require("express");
const UserController = require("./controller/userController");

const router = express.Router();

/*********************************** guest routers *********************************************/
router.post("/register", UserController.registartion);
router.post("/login", UserController.login);

module.exports = router;
