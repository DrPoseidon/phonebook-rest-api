const { Schema, model } = require('mongoose');

module.exports = model('phonebook', new Schema({
  _id: { type: String, unique: true },
  email: { type: String },
  jobTitle: { type: String },
  name: { type: String, required: true },
  organization: { type: String },
  patronymic: { type: String },
  phoneNumber: { type: String, required: true },
  surname: { type: String },
  photo: { type: Buffer },
}));
