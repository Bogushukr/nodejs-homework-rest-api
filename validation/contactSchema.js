const Joi = require("joi");

const joiContactSchema = Joi.object({
    name: Joi.string().min(2).max(25).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['ua', 'com', 'net', 'org'] },
    })
    .required(),
  phone: Joi.string()
    .pattern(/[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}/)
    .required(),
})

module.exports = joiContactSchema;