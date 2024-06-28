const { UserDao } = require('../models/user.dao');
const userDao = new UserDao();
const { Bcrypt } = require('../utils/bcrypt');
const bcrypt = new Bcrypt();
const jwt = require('jsonwebtoken');
const { checkPhoneNumber } = require('../utils/checkPhoneNumber');
const { checkEmptyValue } = require('../utils/checkEmptyValue');
const { validatePassword } = require('../utils/validatePassword');
const { validateEmail } = require('../utils/validateEmail');

class UserService {
  signUp = async (body) => {
    const { nickname, email, password, phoneNumber, profile_image, birthday } =
      body;

    checkPhoneNumber(phoneNumber);
    checkEmptyValue(nickname, email, password);
    validateEmail(email);
    validatePassword(password);
    const hashPassword = await bcrypt.hashPassword(password);
    await userDao.checkDuplicateNickname(nickname);
    await userDao.checkDuplicateEmail(email);
    await userDao.checkDuplicatePhoneNumber(phoneNumber);

    const newBody = {
      nickname,
      email,
      password: hashPassword,
      phoneNumber,
      profile_image,
      birthday,
    };

    await userDao.createUser(newBody);
  };

  login = async (body) => {
    const { email, password } = body;
    const { id, password: hashedPassword } = await userDao.getUserByEmail(
      email
    );
    await bcrypt.checkPassword({ password, hashedPassword });
    const iss = process.env.ISSUER;
    const token = jwt.sign({ id, email, iss }, process.env.SECRET_KEY);

    return token;
  };
}

module.exports = { UserService };
