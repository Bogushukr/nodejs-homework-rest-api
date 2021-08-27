const Contact = require('./shemas');

const update = async (contactId, body) => {
  const result = await Contact.findByIdAndUpdate(
    { _id: contactId },
    { ...body },
    { new: true },
  );
  return result;
};

module.exports = update;