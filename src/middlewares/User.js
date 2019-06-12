const Joi = require("@hapi/joi");

module.exports = async (request, response, next) => {
  try {
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
      .without("password", "access_token")
      .unknown();

    const { error } = Joi.validate(request.body, schema);

    if (error) {
      delete error["_object"];
      return response.status(401).json({ message: "invalid user", error });
    }

    next();
  } catch (error) {
    console.log("error", error);
    return response.status(401).json({ message: "invalid user", error });
  }
};
