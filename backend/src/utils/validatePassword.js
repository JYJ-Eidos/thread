const { throwError } = require('./throwError');

const validatePassword = (password) => {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passwordRegex.test(password)) {
    throwError(400, 'CHECK_PASSWORD');
  }
};

module.exports = { validatePassword };
