const authSignUp = require("./authSignUp");
const authSignIn = require("./authSignIn");
const authCurrent = require("./authCurrent");
const authSignOut = require("./authSignOut");
const updateUserAvatar = require("./updateUserAvatar");
const authVerify = require("./authVerify");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  authSignUp,
  authSignIn,
  authCurrent,
  authSignOut,
  updateUserAvatar,
  authVerify,
  resendVerifyEmail,
};
