const { ContactServices } = require('./contactsService.js')
const { UserServices } = require('./userService.js')
const { AuthServices } = require('./authService.js')

const contactService = new ContactServices()
const userService = new UserServices()
const authService = new AuthServices()

module.exports = {
    contactService,
    authService,
    userService
}