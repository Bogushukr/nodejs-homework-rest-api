const express = require('express')
const router = express.Router()

const { contactsController } = require('../../controller')
const {
  joiContactSchema,
  schemaUpdateStatusContact,
} = require('../../validation')

router
  .get('/', contactsController.getAll)
  .get('/:contactId', contactsController.getById)
  .post('/',
    joiContactSchema,
    contactsController.add)
  .delete('/:contactId', contactsController.remove)
  .patch('/:contactId',
    joiContactSchema,
    contactsController.update)
  .patch('/:contactId/favorite',
    schemaUpdateStatusContact,
    contactsController.updateStatusContact)

module.exports = router
