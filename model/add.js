const Contact = require('./shemas');

const addContact = async (body) => {
  const result = await Contact.create(body);
  return result;
};

module.exports = addContact;