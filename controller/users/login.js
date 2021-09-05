const { HttpCode, status } = require('../../helpers/constants')
const { authService } = require('../../services')

const login = async (req, res, next) => {
    const {email, password} = req.body
    try {
      const token = await authService.login(email, password)
      if (token) {
        return res.status(HttpCode.OK).json({
          status: status.SUCCESS,
          code: HttpCode.OK,
          data: {
            token, 
          }
       })
      }
      next({
        status: HttpCode.UNAUTHORIZED,
        message: 'Email or password is wrong',
        data: 'Unauthorized'
      })
    } catch (error) {
      next(error)
    }
}

module.exports = login