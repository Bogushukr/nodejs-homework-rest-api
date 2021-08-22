const contactsOperations = require("../model");

const getById = async (req, res, next) => {
  try {
    const contact = await contactsOperations.getContactById(req.params.contactId);
    if(!contact) {
      return res.status(404).json({
          "message": "Not found"
          });
      }
    res.json({
        contact
        })
  }
  catch (error) {
    next(error);
  }
}

module.exports = getById