const { HttpCode, status } = require('../../helpers/constants')
const { userService } = require('../../services')

const sendNewMail = async (req, res, next) => {
    try {
        const result = await userService.sendNewMail(req.body)
  
        if (result) {
            return res.status(HttpCode.OK).json({
                status: status.SUCCESS,
                code: HttpCode.OK,
                data: {
                    message: 'Verification email sent'
                },
            });
        }
        return next({
            message: 'Verification has already been passed'
        })
    } catch (error) {
        next(error)
    }
}
    module.exports = sendNewMail