const express = require('express')
const router = express.Router()

const { userController } = require('../../controller')
const guard = require('../../helpers/guard')
const upload = require('../../helpers/multer')


router
    .post(
        '/signup', userController.reg)
    .post('/login', userController.login)
    .post('/logout', guard, userController.logout)
    .get('/current', guard, userController.current)
    .patch('/', guard, userController.subscription)
    .patch(
        '/avatars',
        guard,
        upload.single('avatar'),
        userController.avatarUpload)


module.exports = router