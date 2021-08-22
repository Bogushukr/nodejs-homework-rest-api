const { contactSchema } = require("../validation");
const contactsOperations = require("../model");

const add = async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        "message": "missing required name field"
      })
    }
    const newContact = await contactsOperations.addContact(req.body);
    return res.status(201).json({
      status: "Success",
      code: 201,
      message: "New contact has been added",
      data: {
        newContact,
      },
    });
  } catch (error) {
    next(error);
  }
}

module.exports = add