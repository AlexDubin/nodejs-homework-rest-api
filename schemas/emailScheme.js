const Joi = require("joi");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const emailScheme = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const validateBody = (data) => {
  return emailScheme.validate(data);
};

module.exports = {
  emailScheme,
  validateBody,
};
