const express = require('express')
const router = express.Router()
const { contactsController } = require('../../controller')
const { createContact, updateContact, updateStatus } = require('../../validation/validation')
const guard = require('../../helpers/guard')

router
    .get('/', guard, contactsController.getAll)
    .get('/:contactId', guard, contactsController.getById)
    .post('/', guard, createContact, contactsController.add)
    .delete('/:contactId', guard, contactsController.remove)
    .patch('/:contactId', guard, updateContact, contactsController.update)
    .patch('/:contactId/favorite', guard, updateStatus, contactsController.updateStatus)

module.exports = router


