const mongoose = require('mongoose');

const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const Session = new Schema({
  refreshToken: {
    type: String,
    default: '',
  },
});

const User = new Schema({
  firstName: {
    type: String,
    default: '',
  },
  lastName: {
    type: String,
    default: '',
  },
  phone: {
    type: String,
    default: '',
  },
  refreshToken: {
    type: [Session],
  },
});

User.set('toJSON', {
  transform: (doc, ret) => {
    const updatedUser = ret;
    delete updatedUser.refreshToken;
    return updatedUser;
  },
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
