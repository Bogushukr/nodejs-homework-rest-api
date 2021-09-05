const { HttpCode, status } = require('../../helpers/constants')
const { authService } = require('../../services')

const logout = async (req, res, next) => {
  try {
    const userId = req.user.id;
    await authService.logout(userId);
    return res
      .status(HttpCode.NO_CONTENT)
      .json({
        status: status.SUCCESS,
        message: 'success',
        code: HttpCode.NO_CONTENT
      });
  } catch (error) {
    next(error);
  }
}

module.exports = logout