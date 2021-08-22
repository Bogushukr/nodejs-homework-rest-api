const fs = require('fs/promises')
const getAll = require("./getAll");

const filePath = require("./filePath");

const removeContact = async (contactId) => {
  const contacts = await getAll()
  const contact = contacts.find(({ id }) => id.toString() === contactId)
  if (!contact) return
  const newContacts = contacts.filter(({ id }) => id.toString() !== contactId)
  await fs.writeFile(
    filePath,
    JSON.stringify(newContacts, null, 2),
    'utf8'
  )
  return contact
}

module.exports = removeContact;