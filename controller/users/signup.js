const { HttpCode, status } = require('../../helpers/constants')
const { userService } = require('../../services')

const reg  = async (req, res, next) => {
   const {password, email, subscription, avatarURL} = req.body
   const user = await userService.getByEmail(email)
   if (user) {
     return next({
       status: HttpCode.CONFLICT,
       message: 'Email in use',
       data: 'Conflict'
     })
   }
   try {
     const newUser = await userService.addUser({
      password,
      email,
      subscription,
      avatarURL,
     })
     return res
       .status(HttpCode.CREATED)
       .json({
      status: status.SUCCESS,
      code: HttpCode.CREATED,
      data: {
        id: newUser.id,
        email: newUser.email,
        subscribition: newUser.subscribition,
        avatarURL: newUser.avatarURL,
      }
   })
   } catch(err) {
     next(err)
   }
}
  
module.exports = reg 