const User = require("../../models/user-model/User");

verifyEmail = async (req, res) => {
  const { verificationCode } = req.params;
  const user = await User.findOne({ verificationCode });

  if (!user) {
    res.status(404).json({ message: "Email not found." });
  }
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationCode: "",
  });

  res.status(200).json({
    message: "Verification successful",
  });
};

module.exports = {
  verifyEmail,
};
