const getAll = require("./getAll");

const getContactById = async (contactId) => {
  const contacts = await getAll()
  const contact = contacts.find(({ id }) => id.toString() === contactId)
  return contact
}

module.exports = getContactById;