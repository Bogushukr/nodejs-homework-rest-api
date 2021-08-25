const contactsOperations = require("../model");

const remove = async (req, res, next) => {
 try {
    const contact = await contactsOperations.removeContact(req.params.contactId);

    if (contact) {
      return res.json({
        status: "Success",
        code: 200,
        message: "Contact has been deleted",
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

module.exports = remove