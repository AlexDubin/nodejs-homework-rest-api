const User = require("../../models/user-model/User");
const { sendEmail } = require("../../helpers/index");

resendEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    res.status(404).json({ message: "Email not found." });
  }
  if (user.verify) {
    res.status(404).json({ message: "Email already verify." });
  }

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationCode}">Click verify email</a>`,
  };

  res.status(200).json({
    message: "Verify email send success.",
  });

  await sendEmail.sendEmail(verifyEmail);
};

module.exports = {
  resendEmail,
};
