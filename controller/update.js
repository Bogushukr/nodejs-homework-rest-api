const contactsOperations = require("../model");
const { contactSchema } = require("../validation");


const update = async (req, res, next) => {
  try {
       const { error } = contactSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        "message": "missing required name field"
      })
    }
    const contact = await contactsOperations.updateContact(
      req.params.contactId,
      req.body
    );

    if (contact) {
      return res.json({
        status: "Success",
        code: 200,
        message: "Contact has been updated",
        data: {
          contact,
        },
      });
    } else {
      return res.status(400).json({
        status: "Error",
        code: 404,
        message: "Not found",
      });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = update