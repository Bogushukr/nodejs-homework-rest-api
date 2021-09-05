const mongoose = require('mongoose')
const { Schema, SchemaTypes } = mongoose
const mongoosePaginate = require('mongoose-paginate-v2')

const phoneRegexp = /^[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}$/;

const contactsSchema = new Schema({    
        name: {
          type: String,
          required: [true, 'Set name for contact'],
        },
        email: {
          type: String,
          required: [true, 'Set email for contact'],
        },
        phone: {
          type: String,
        match: [
          phoneRegexp, 'Please fill a valid phone number'],
        },
        favorite: {
          type: Boolean,
          default: false,
        },
        owner: {
          type: mongoose.SchemaTypes.ObjectId,
          ref: 'user',
        }
      },
      {versionKey: false, timestamps: true}  
);

contactsSchema.plugin(mongoosePaginate);
const contacts = mongoose.model('contact', contactsSchema)

module.exports = contacts