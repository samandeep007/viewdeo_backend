import { Router } from "express";
import {
  changeCurrentPassword,
  getCurrentUser,
  getUserChannelProfile,
  getWatchHistory,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  updateAccountDetails,
  updateCoverImage,
  updateUserAvatar,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([ //fields is used to upload multiple files at once. This method comes from multer
    {
      name: "avatar",
      maxCount: 1, //maxCount is used to specify the maximum number of files that can be uploaded
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
); //to use middleware, just add it before the method you're executing

router.route("/login").post(loginUser);

//secured routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);

router.route("/change-password").post(verifyJWT, changeCurrentPassword);
router.route("/current-user").get(verifyJWT, getCurrentUser);
router.route("/update-account").patch(verifyJWT, updateAccountDetails);

router.route("/update-userAvatar").patch(verifyJWT, upload.single([{
  name: "avatar",
  maxCount: 1
}]), updateUserAvatar);

router.route("/update-userCoverImage").patch(verifyJWT, upload.single([{ //single is used to upload a single file at once
  name: "coverImage",
  maxCount: 1
}]), updateCoverImage);


router.route("/channel/:username").get(verifyJWT, getUserChannelProfile);
router.route("/watchHistory").get(verifyJWT, getWatchHistory);

export default router;
