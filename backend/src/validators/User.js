const Joi = require("@hapi/joi");

module.exports = request => {
  const schema = Joi.object()
    .keys({
      username: Joi.string()
        .alphanum()
        .min(5)
        .max(30)
        .required(),
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .min(5)
        .max(30)
        .required()
    })
    .without("password", "access_token");

  return Joi.validate(request.body, schema);
};
