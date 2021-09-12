const { HttpCode, status } = require('../../helpers/constants')
const { userService } = require('../../services')


const avatarUpload = async (req, res, next) => {
      try {
    const userId = req.user.id;
    const path = req.file.path
    const originalName = req.file.originalname
    if (req.file) {
      const url = await userService.avatarUpload(userId, path, originalName);
       
      return res.status(HttpCode.OK).json({
        status: status.SUCCESS,
        code: HttpCode.OK,
        data: {
          email: req.user.email,
          avatarURL: url,
        },
      });
  }} catch (error) {
    next(error)
  }
}

module.exports = avatarUpload