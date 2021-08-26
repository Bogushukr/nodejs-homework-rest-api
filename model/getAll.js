const Contact = require('./shemas');

const listContacts = async () => {
  const results = await Contact.find({});
  return results;
};

module.exports = listContacts;