const passport = require('passport')
require('../config/passport')
const { HttpCode } = require('./constants')

const guard = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err || !user) {
  return next({
      status: HttpCode.UNAUTHORIZED,
      message: 'UNAUTHORIZED',
      data: 'UNAUTHORIZED'
  })
    }
     req.user = user
    return next()
})(req, res, next)
}

module.exports = guard