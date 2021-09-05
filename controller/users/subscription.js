const { HttpCode, status } = require('../../helpers/constants')
const { userService } = require('../../services')
  
const subscription = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const updatedUser = await userService.updateSubscription(
      userId,
      req.body,
    );

    return res
      .status(HttpCode.OK)
      .json({
        status: status.SUCCESS,
        code: HttpCode.OK,
        data: {
          email: updatedUser.email,
          subscription: updatedUser.subscription,
        },
      });
  } catch (error) {
    next(error);
  }
}

module.exports = subscription