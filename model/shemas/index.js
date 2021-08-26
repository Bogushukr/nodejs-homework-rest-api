const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'This fill is required, please fill it'],
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
        /[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}/,
        'Please fill a valid phone number',
      ],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
);

const Contact = model('contact', contactSchema);

module.exports = Contact;