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

const schemaUpdateStatusContact = Joi.object({
  favorite: Joi.boolean().optional(),
})

const validate = async (schema, obj, next) => {
  try {
    await schema.validateAsync(obj)
    return next()
  } catch (error) {
    next({
      status: 400,
      message: "missing field favorite",
    })
  }
}

module.exports.joiContactSchema = ({ body }, _, next) => {
  return validate(joiContactSchema, body, next)
}

module.exports.schemaUpdateStatusContact = ({ body }, _, next) => {
  return validate(schemaUpdateStatusContact, body, next)
}