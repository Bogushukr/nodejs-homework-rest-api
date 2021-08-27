const Contact = require('./shemas');

const updateStatusContact = async (contactId, body) => {
  try {
    const data = await Contact.findByIdAndUpdate({ _id: contactId }, body, {
      new: true,
    })
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

module.exports = updateStatusContact