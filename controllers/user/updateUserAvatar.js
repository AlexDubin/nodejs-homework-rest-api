const User = require("../../models/user-model/User");

const fs = require("fs/promises");
const path = require("node:path");
const avatarPath = path.resolve("public", "avatars");

updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const resultUpload = path.join(avatarPath, originalname);

  await fs.rename(tempUpload, resultUpload);

  const avatarURL = path.join("avatars", originalname);

  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({
    avatarURL,
  });
};

module.exports = {
  updateAvatar,
};
