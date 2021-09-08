const Joi = require('joi')
const { HttpCode } = require('../helpers/constants')

const phoneRegexp = /^[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}$/;

const schemaCreate = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .required(),
  email: Joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  phone: Joi
    .string()
    .pattern(phoneRegexp)
    .required(),
})

const schemaUpdate = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .optional(),
  email: Joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .optional(),
  phone: Joi
    .string()
    .pattern(phoneRegexp)
    .required(),
}).min(1)

const statusUpdate = Joi.object({
  favorite: Joi.boolean().required()
})


const validate = (schema, body, next) => {
  const { error } = schema.validate(body)
  if (error) {
    const [{ message }] = error.details
    return next({
      status: HttpCode.BAD_REQUEST,
      code: HttpCode.BAD_REQUEST,
      message: message.replace(/"/g, ''),
    })
  }
  next()
}
module.exports.createContact = (req, res, next) => {
  return validate(schemaCreate, req.body, next)
}
module.exports.updateContact = (req, res, next) => {
  return validate(schemaUpdate, req.body, next)
}

module.exports.updateStatus = (req, res, next) => {
  return validate(statusUpdate, req.body, next)
}