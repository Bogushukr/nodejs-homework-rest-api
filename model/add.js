const fs = require('fs/promises')
const { v4: uuid } = require('uuid')

const getAll = require("./getAll");
const filePath = require("./filePath");

const addContact = async (body) => {
  const contacts = await getAll()
  const id = uuid()
  const newContact = { id, ...body }
  const newContacts = [...contacts, newContact]
  await fs.writeFile(
    filePath,
    JSON.stringify(newContacts, null, 2),
    'utf8'
  )
  return newContact
}

module.exports = addContact;