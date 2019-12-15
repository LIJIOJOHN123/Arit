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
//profile @private
router.post("/profile", authMiddleware, ProfileController.addProfile);
router.post("/profile/address", authMiddleware, ProfileController.addAddress);
router.post("/profile/edu", authMiddleware, ProfileController.addEduction);
router.post("/profile/work", authMiddleware, ProfileController.addWork);
router.post("/profile/place", authMiddleware, ProfileController.addPlace);
router.post("/profile/address", authMiddleware, ProfileController.editAddress);
//profile @private
router.get("/profile", authMiddleware, ProfileController.getProfile);

module.exports = router;
