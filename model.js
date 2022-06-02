const { Schema, model } = require('mongoose');

const PhoneBook = new Schema({
  _id: String,
  email: { type: String, required: true },
  jogTitle: { type: String, required: true },
  name: { type: String, required: true },
  organization: { type: String, required: true },
  patronymic: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  surname: { type: String, required: true },
  photo: { type: Buffer, required: true },
});

module.exports = model('phonebook', PhoneBook);
