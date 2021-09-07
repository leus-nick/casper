const passport = require('passport');
const jwt = require('jsonwebtoken');

const dev = process.env.NODE_ENV !== 'production';

exports.COOKIE_OPTIONS = {
  httpOnly: true,
  secure: !dev,
  signed: true,
  maxAge: 60 * 60 * 24 * 30,
  sameSite: 'none',
};

exports.getToken = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: process.env.SESSION_EXPIRY,
  });
};

exports.getRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
  });
};

exports.verifyUser = passport.authenticate('jwt', { session: false });
