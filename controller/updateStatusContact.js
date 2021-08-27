const contactsOperations = require("../model");

const updateStatusContact = async (req, res, next) => {
  try {
    const data = await contactsOperations.updateStatusContact(
      req.params.contactId,
      req.body)
    data
      ? res.status(400).json({
        status: "Success",
        code: 200,
        message: "Contact has been updated",
        data: {
            data,
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