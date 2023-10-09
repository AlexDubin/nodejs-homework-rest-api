const User = require("../../models/user-model/User");
const { validateBody } = require("../../schemas/userScheme");
const { userSignUpSchema } = require("../../schemas/userScheme");
const bcrypt = require("bcryptjs");

const fs = require("fs/promises");
const path = require("node:path");
var gravatar = require("gravatar");
const avatarPath = path.resolve("public", "avatars");

signUp = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { error } = validateBody(req.body, userSignUpSchema);
    const user = await User.findOne({ email });
    const hashPassword = await bcrypt.hash(password, 10);
    let avatarURL;

    if (req.file) {
      const { path: oldPath, filename } = req.file;
      const newPath = path.join(avatarPath, filename);
      await fs.rename(oldPath, newPath);
      avatarURL = path.join("public", "avatars", filename);
    } else {
      avatarURL = gravatar.url(email);
    }

    if (error) {
      res.status(400).json({ message: error.details[0].message });
      return;
    } else if (user) {
      res.status(409).json({ message: "Email already exist" });
    } else {
      const newUser = await User.create({
        ...req.body,
        password: hashPassword,
        avatarURL,
      });
      res.status(201).json(req.body);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signUp,
};