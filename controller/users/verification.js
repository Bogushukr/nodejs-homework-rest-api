const { HttpCode, status } = require('../../helpers/constants')
const { userService } = require('../../services')

const verification = async (req, res, next) => {
try {
  const result = userService.verification(req.params)
  if(result) {
    return res.status(HttpCode.OK).json({
      status: status.SUCCESS,
      code: HttpCode.OK,
      data: {
        message: 'Verification successful'
      },
    });
  }
  return next({
    message: 'User not found'
  })
} catch (error) {
  next(error)
}
}

module.exports = verification