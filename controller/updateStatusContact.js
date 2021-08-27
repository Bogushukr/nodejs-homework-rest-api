const contactsOperations = require("../model");
const { contactSchema } = require("../validation");

const updateStatusContact = async (req, res, next) => {
  try {
     const { error } = contactSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        "message": "missing required name field"
      })
    }
    const data = await contactsOperations.updateStatusContact(contactId, body)
    data
      ? res.status(400).json({
        status: "Success",
        code: 200,
        message: "Contact has been updated",
        data: {
            contact,
        }
      })
      : next({
        status: "Error",
        code: 404,
        message: "Not found",
      })
  } catch (error) {
    next(error)
  }
}

module.exports = updateStatusContact