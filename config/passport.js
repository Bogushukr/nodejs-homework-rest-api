const passport = require('passport')
const {Strategy, ExtractJwt} = require('passport-jwt')

const { userService } = require('../services')

require('dotenv').config()
const SECRET_KEY = process.env.JWT_KEY

const params = {
    secretOrKey: SECRET_KEY,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
}

passport.use(new Strategy(params, async (payload, done) => {    
    try {
        const user = await userService.getById(payload.id)
        
        if(!user) {
            done(new Error('User not found'))
        }
        if(!user.token) {
            return done(null, false)
        }
        done(null, user)
    } catch (error) {
        done(error)
    }
    
}))