const express = require("express");
const auhRouter = express.Router();
const authController = require("../../controllers/user/index");
const authenticate = require("../../middlewares/authentic");
const upload = require("../../middlewares/upload");

auhRouter.post("/signup", authController.authSignUp.signUp);
auhRouter.post("/signin", authController.authSignIn.signIn);
auhRouter.get("/current", authenticate, authController.authCurrent.getCurrent);
auhRouter.post("/signout", authenticate, authController.authSignOut.signOut);
auhRouter.patch(
  "/users/avatars",
  authenticate,
  upload.single("avatar"),
  authController.updateUserAvatar.updateAvatar
);

module.exports = auhRouter;
