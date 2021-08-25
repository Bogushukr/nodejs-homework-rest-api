const listContacts = require("./getAll");
const getContactById = require("./getById");
const updateContact = require("./update");
const removeContact = require("./del");
const addContact = require("./add");

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
