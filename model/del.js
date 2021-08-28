const Contact = require('./shemas');

const removeContact = async (contactId) => {
  const result = await Contact.findByIdAndRemove({
    _id: contactId,
  });
  return result;
};

module.exports = removeContact;