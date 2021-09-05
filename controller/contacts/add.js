const { HttpCode, status } = require('../../helpers/constants')
const { contactService } = require('../../services')

// console.log('1=====', contactService);

const add = async (req, res, next) => {
  try {
    const userID = req.user.id
    const contact = await contactService.addContact(req.body, userID)
    res.status(HttpCode.CREATED).json({
      status: status.SUCCESS,
      message: 'Contact is added',
      code: HttpCode.CREATED,
      data: {
        contact,
      }
    })
  } catch (err) {
    next(err)
  }
}

module.exports = add
