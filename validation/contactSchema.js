const Joi = require("joi");

const phoneRegexp = /^[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}$/;

const joiContactSchema = Joi.object({
  name: Joi
    .string()
    .min(2)
    .max(25)
    .required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['ua', 'com', 'net', 'org'] },
    })
    .required(),
  phone: Joi
    .string()
    .pattern(phoneRegexp)
    .required(),
  favorite: Joi
    .boolean().optional(),
})

module.exports = joiContactSchema;