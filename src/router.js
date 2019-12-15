const express = require("express");
const {
  registartion,
  login,
  updateUserInfo
} = require("./controller/userController");
const authMiddleware = require("./middleware/authMiddleware");
const { registerMiddlware } = require("./middleware/userMiddleware");
const {
  addProfile,
  addAddress,
  addEduction,
  addWork,
  addPlace,
  editProfile,
  editAddress,
  editEducation,
  editWork,
  deleteAddress,
  deleteEducation,
  deleteWork,
  deletePlace,
  getProfile,
  getProfiles,
  getProfileById
} = require("./controller/profileController");

const router = express.Router();

/*********************************** guest routers *********************************************/
router.post("/register", registerMiddlware, registartion);
router.post("/login", login);

/*********************************** users routers *********************************************/
//user @private
router.put("/user", authMiddleware, updateUserInfo);
//profile @private
router.post("/profile", authMiddleware, addProfile);
router.post("/profile/address", authMiddleware, addAddress);
router.post("/profile/edu", authMiddleware, addEduction);
router.post("/profile/work", authMiddleware, addWork);
router.post("/profile/place", authMiddleware, addPlace);
router.put("/profile", authMiddleware, editProfile);
router.put("/profile/address/:id", authMiddleware, editAddress);
router.put("/profile/education/:id", authMiddleware, editEducation);
router.put("/profile/work/:id", authMiddleware, editWork);
router.delete("/profile/address/:id", authMiddleware, deleteAddress);
router.delete("/profile/education/:id", authMiddleware, deleteEducation);
router.delete("/profile/work/:id", authMiddleware, deleteWork);
router.delete("/profile/place/:id", authMiddleware, deletePlace);
router.get("/profile", authMiddleware, getProfile);
//profile @public
router.get("/profiles", getProfiles);
router.get("/profile/:id", getProfileById);

module.exports = router;
