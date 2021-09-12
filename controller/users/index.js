const reg  = require('./signup')
const login = require('./login')
const logout = require('./logout')
const current = require('./current')
const subscription = require('./subscription')
const avatarUpload = require('./avatarUpload')


module.exports = {
    reg,
    login,
    logout,
    current,
    subscription,
    avatarUpload
}