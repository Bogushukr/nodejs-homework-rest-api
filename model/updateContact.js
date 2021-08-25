const fs = require("fs/promises");

const filePath = require("./filePath");

const updateContact = async (contactId, body) => {
  const contacts = await listContacts()
  const index = contacts.findIndex(({ id }) => id.toString() === contactId)
  if (index === -1) return
  contacts[index] = { ...contacts[index], ...body }
  await fs.writeFile(filePath, JSON.stringify(contacts, null, 2), 'utf8')
  return contacts[index]
}

module.exports = updateContact;

