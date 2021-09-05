const { HttpCode, status } = require('../../helpers/constants')
const { contactService } = require('../../services')

const updateStatus = async (req, res, next) => {
if (Object.values(req.body).length === 0) {
    return next({
    status: HttpCode.BAD_REQUEST,
    message: 'Missing field favorite',
    data: 'Missing field favorite'
    })
}
try {
    const userID = req.user.id
    const contact = await contactService.updateStatusContact(req.params, req.body, userID)
    if (contact) {
    res.status(HttpCode.OK).json({
        status: status.SUCCESS,
        message: 'Contact is updated',
        code: HttpCode.OK,
        data: {
        contact,
        }
    })
    } else {
    next({
        status: HttpCode.NOT_FOUND,
        message: 'Not found',
        data: 'Not found'
    })
    }
} catch (err) {
    next(err)
}
}

module.exports = updateStatus