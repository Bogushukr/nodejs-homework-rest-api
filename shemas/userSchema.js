const mongoose = require('mongoose')
const { Schema } = mongoose
const { subscription } = require('../helpers/constants')
const bcrypt = require('bcryptjs')
const gravatar = require('gravatar')

const userSchema = new Schema({
    password: {
      type: String,
      required: [true, 'Password is required'],
  },
  
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      validate(value) {
        const regular = /\S+@\S+\.\S/
        return regular.test(String(value).toLowerCase())
      }
  },
    
    subscription: {
      type: String,
      enum: {
        values: [subscription.STARTER, subscription.PRO, subscription.BUSINESS],
        message: 'This subscribition plan do not exist'
      },
      default: subscription.STARTER
  },
    
    token: {
      type: String,
      default: null,
  },
    
    avatarURL: {
      type: String,
      default: function () {
        return gravatar.url(this.email, { s: '250' }, true);
      },
  },
    verify: {
      type: Boolean,
      default: false,
  },
    verifyToken: {
      type: String,
      required: [true, 'Verify token is required'],
  },
  },
  {versionKey: false, timestamps: true}  
)

const SALT = 6
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
   return next()
  }
 this.password = bcrypt.hash(this.password, bcrypt.genSaltSync(SALT))
next()
})

userSchema.methods.validPassword = async function (password) {
return await bcrypt.compare(password, this.password)
}

const User = mongoose.model('user', userSchema)

module.exports = User