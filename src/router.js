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
const {
  createChannel,
  getChannel,
  getOneChannel,
  editChannel,
  deleteChannel,
  likeChannel,
  unlikeChannel,
  shareChannel,
  unshareChannel,
  subscribeChannel,
  unsubscribeChannel,
  getAllChannels,
  getByIdChannels
} = require("./controller/channelController");
const router = express.Router();
const {
  createPost,
  likePost,
  unlikePost,
  sharePost,
  unsharePost
} = require("./controller/postController");

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
//channels @private
router.post("/channel", authMiddleware, createChannel);
router.get("/channel", authMiddleware, getChannel);
router.get("/channel/:id", authMiddleware, getOneChannel);
router.put("/channel/:id", authMiddleware, editChannel);
router.post("/channel/:id", authMiddleware, deleteChannel);
router.post("/channel/:id/like", authMiddleware, likeChannel);
router.post("/channel/:id/unlike", authMiddleware, unlikeChannel);
router.post("/channel/:id/share", authMiddleware, shareChannel);
router.post("/channel/:id/unshare", authMiddleware, unshareChannel);
router.post("/channel/:id/subscribe", authMiddleware, subscribeChannel);
router.post("/channel/:id/unsubscribe", authMiddleware, unsubscribeChannel);
//channels @private
router.get("/channels", getAllChannels);
router.get("/channels/:id", getByIdChannels);
//post public
router.post("/channel/:id/post", authMiddleware, createPost);
router.post("/post/:id/like", authMiddleware, likePost);
router.post("/post/:id/unlike", authMiddleware, unlikePost);
router.post("/post/:id/share", authMiddleware, sharePost);
router.post("/post/:id/unshare", authMiddleware, unsharePost);

module.exports = router;
