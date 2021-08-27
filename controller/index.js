const getAll = require('./getAll')
const getById = require('./getById')
const add = require('./add')
const remove = require('./remove')
const update = require('./update')
const updateStatusContact = require('./updateStatusContact')

const contactsController ={
  getAll,
  getById,
  add,
  remove,
  update,
  updateStatusContact   
}

module.exports = {
  contactsController
}