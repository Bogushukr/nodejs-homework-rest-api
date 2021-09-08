const { UserRepository } = require('../repositories')
const jwt = require('jsonwebtoken')

require('dotenv').config()

console.log('2====', UserRepository);

const SECRET_KEY = process.env.JWT_KEY

class AuthServices {
  constructor() {
    this.repository = new UserRepository()
    }

  async login(email, password) {
    const user = await this.repository.getByEmail(email)  
    if (!user || !user.validPassword(password)  ) {
     return null
    }
    const id = user.id
    const payload = {id}
    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: '1h'})
    await this.repository.updateToken(id, token)
    return {
      token,
      user: { email: user.email, subscription: user.subscription },
    };
  }

  async logout(contactId) {
    const data = await this.repository.updateToken(contactId, null)
    return data
  }
   
  async current(email) {
    const data = await this.repository.getByEmail(email)
    return { email: data.email, subscription: data.subscription };
  }
}

module.exports = { AuthServices }