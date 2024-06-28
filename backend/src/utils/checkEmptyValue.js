const { throwError } = require('./throwError');

function checkEmptyValue() {
  for (const arg of arguments) {
    if (!Boolean(arg)) {
      throwError(400, 'CHECK_INPUT_VALUE');
    }
  }
}

module.exports = { checkEmptyValue };
