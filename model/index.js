const listContacts = require("./getAll");
const getContactById = require("./getById");
const update = require("./update");
const removeContact = require("./del");
const addContact = require("./add");
const updateStatusContact = require("./updateStatusContact")

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  update,
  updateStatusContact
}
