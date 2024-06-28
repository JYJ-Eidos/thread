const { throwError } = require('./throwError');

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throwError(400, 'CHECK_EMAIL');
  }
};

module.exports = { validateEmail };
