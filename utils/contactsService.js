const { Contact } = require("../models/Contact");

async function updateStatusContact(contactId, favorite) {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      contactId,
      { favorite },
      { new: true }
    );
    return updatedContact;
  } catch (error) {
    return null;
  }
}

module.exports = {
  updateStatusContact,
};
