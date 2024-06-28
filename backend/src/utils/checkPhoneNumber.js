const { throwError } = require('./throwError');

const checkPhoneNumber = (phoneNumber) => {
  if (phoneNumber.length !== 11) {
    throwError(400, 'CHECK_PHONE_NUMBER');
  }
};

module.exports = { checkPhoneNumber };
