const express = require("express");
const UserController = require("./controller/userController");
const authMiddleware = require("./middleware/authMiddleware");
const registerMiddlware = require("./middleware/userMiddleware");

const router = express.Router();

/*********************************** user routers *********************************************/
router.post("/register", registerMiddlware, UserController.registartion);
router.post("/login", UserController.login);
router.put("/user", authMiddleware, UserController.updateUserInfo);

module.exports = router;
