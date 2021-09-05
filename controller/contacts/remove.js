const { HttpCode, status } = require('../../helpers/constants')
const { contactService } = require('../../services')

const remove = async (req, res, next) => {
  try {
    const userID = req.user.id
    const contact = await contactService.removeContact(req.params, userID)
    if (contact) {
      res.status(HttpCode.OK).json({
        status: status.SUCCESS,
        message: 'Contact is deleted',
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

module.exports = remove