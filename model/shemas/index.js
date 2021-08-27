const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const phoneRegexp = /^[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}$/;

const contactSchema = new Schema({
    name: {
      type: String,
      required: [true, 'Set name for contact'],
      unique: false,
    },
    email: {
      type: String,
      required: [true, 'This fill is required, please fill it'],
      unique: true,
    },
    phone: {
      type: String,
      match: [
       phoneRegexp, 'Please fill a valid phone number'],
      unique: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
},
    {
    versionKey: false,
    timestamps: true,
  },
);

const Contact = model('contact', contactSchema);

module.exports = Contact;