const express = require('express')
const router = express.Router()
const { userController } = require('../../controller')
const guard = require('../../helpers/guard')


router
    .post('/signup', userController.reg)
    .post('/login', userController.login)
    .post('/logout', guard, userController.logout)
    .get('/current', guard, userController.current)
    .patch('/', guard, userController.subscription)


module.exports = router