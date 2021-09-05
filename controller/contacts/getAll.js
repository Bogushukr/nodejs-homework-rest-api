const { HttpCode, status } = require('../../helpers/constants')
const { contactService } = require('../../services')

const getAll = async (req, res, next) => {
  try {
    const userID = req.user.id
    const contacts = await contactService.listContacts(req.query, userID)
    res.status(HttpCode.OK).json({
      status: status.SUCCESS,
      message: 'Success',
      code: HttpCode.OK,
      data: {
        ...contacts,
      }
    })
  } catch (err) {
    next(err)
  }
}

module.exports = getAll