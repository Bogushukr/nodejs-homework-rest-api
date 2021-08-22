const express = require('express')
const router = express.Router()

const { contactsController } = require('../../controller')

router
  .get('/', contactsController.getAll)
  .get('/:contactId', contactsController.getById)
  .post('/', contactsController.add)
  .delete('/:contactId', contactsController.remove)
  .patch('/:contactId', contactsController.update)

module.exports = router
