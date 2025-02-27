const { userSchema } = require('../shemas')

class UserRepository {
  constructor() {
    this.model = userSchema
  }
    
  async addUser(body) {
    const user = new this.model(body)
    return user.save()
  }

  async getById(userId) {
    const data = await this.model.findOne({_id: userId})
    return data
  }
  
  async getByEmail(email) {    
    const data = await this.model.findOne({email})
    return data
  }
  
  async updateToken(userId, token) {
    await this.model.updateOne({_id: userId}, {token}) 
  }

  async updateSubscription(userID, body) {
    const data = await this.model.findByIdAndUpdate(userID, {...body},{new: true})
    return data
  }

    async avatarUpload(userID, avatarPath) {
    const data = await this.model.findByIdAndUpdate(userID, {...avatarPath},{new: true})
    return data
  }

  async verification({verifyToken}) {    
    const user = await this.model.findOne({verifyToken})    
    if(!user) {
      return false
     }
    const record = await user.updateOne({verify: true, verifyToken: null})
    return record
  }
  
  async sendNewMaiL(email) {      
    const data = await this.model.findOne({email})      
    return data
  } 
}

module.exports = { UserRepository }