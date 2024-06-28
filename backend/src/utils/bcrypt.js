require('dotenv').config({ path: '../../.env' });
const bcrypt = require('bcrypt');
const { throwError } = require('./throwError');

class Bcrypt {
  hashPassword = async (password) => {
    const hashedPassword = await bcrypt.hash(
      password,
      Number(process.env.SECRET_KEY)
    );
    return hashedPassword;
  };

  checkPassword = async ({ password, hashedPassword }) => {
    const verifyPassword = await bcrypt.compare(password, hashedPassword);
    if (!verifyPassword) {
      throwError(400, 'CHECK_PASSWORD');
    }
  };
}

module.exports = { Bcrypt };
