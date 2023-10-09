const sgMail = require("@sendgrid/mail");
const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

sendEmail = async (data) => {
  const email = { ...data, from: "dubinalex@gmail.com" };
  await sgMail.send(email);
  return true;
};

module.exports = {
  sendEmail,
};
