const express = require("express");
const UserController = require("./controller/userController");
const authMiddleware = require("./middleware/authMiddleware");
const { registerMiddlware } = require("./middleware/userMiddleware");
const ProfileController = require("./controller/profileController");

const router = express.Router();

/*********************************** guest routers *********************************************/
router.post("/register", registerMiddlware, UserController.registartion);
router.post("/login", UserController.login);

/*********************************** users routers *********************************************/
router.put("/user", authMiddleware, UserController.updateUserInfo);
//profile
router.post("/profile", authMiddleware, ProfileController.addProfile);
router.get("/profile", authMiddleware, ProfileController.getProfile);

module.exports = router;
