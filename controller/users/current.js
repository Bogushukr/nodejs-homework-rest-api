const { HttpCode, status } = require('../../helpers/constants')
const { authService } = require('../../services')


const current = async (req, res, next) => {  
  try {
    const userEmail = req.user.email;
     
    const user = await authService.current(userEmail);

    return res
      .status(HttpCode.OK)
      .json({
        status: status.SUCCESS,
        code: HttpCode.OK,
        data: user
      });
  } catch (error) {
    next(error);
  }
}
  
module.exports = current