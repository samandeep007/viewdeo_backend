import { Router } from "express";
import {
  changeCurrentPassword,
  getCurrentUser,
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
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
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
router.route("/change-password").post(changeCurrentPassword);
router.route("/currentUser").get(verifyJWT, getCurrentUser);
router.route("/update-user").post(verifyJWT, updateAccountDetails);

router.route("/update-userAvatar").post(upload.single([{
  name: "avatar",
  maxCount: 1
}]), updateUserAvatar);

router.route("/update-userCoverImage").post(upload.single([{
  name: "coverImage",
  maxCount: 1
}]), updateCoverImage);



export default router;
