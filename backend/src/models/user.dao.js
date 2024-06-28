const { AppDataSource } = require('./data-source');
const { throwError } = require('../utils/throwError');

class UserDao {
  createUser = async (body) => {
    const { nickname, email, password, phoneNumber, profile_image, birthday } =
      body;
    try {
      await AppDataSource.query(
        `
      INSERT INTO users (
      nickname,
      email,
      password,
      phone_number,
      profile_image,
      birthday
      ) VALUES (?, ?, ?, ?, ?, ?);
      `,
        [nickname, email, password, phoneNumber, profile_image, birthday]
      );
    } catch (err) {
      throwError(500, 'SERVER_ERROR');
    }
  };

  getUserByEmail = async (email) => {
    const [user] = await AppDataSource.query(
      `
        SELECT * FROM users
        WHERE email = ?;
        `,
      [email]
    );

    if (!user) {
      throwError(404, 'EMAIL_DOES_NOT_EXIST');
    }

    return user;
  };

  checkDuplicateNickname = async (nickname) => {
    const [result] = await AppDataSource.query(
      `
        SELECT * FROM users
        WHERE nickname = ?
        `,
      [nickname]
    );

    if (result) {
      throwError(400, 'DUPLICATE_NICKNAME');
    }
  };

  checkDuplicateEmail = async (email) => {
    const [result] = await AppDataSource.query(
      `
        SELECT * FROM users
        WHERE email = ?
        `,
      [email]
    );

    if (result) {
      throwError(400, 'DUPLICATE_EMAIL');
    }
  };

  checkDuplicatePhoneNumber = async (phoneNumber) => {
    const [result] = await AppDataSource.query(
      `
        SELECT * FROM users
        WHERE phone_number = ?
        `,
      [phoneNumber]
    );
    if (result) {
      throwError(400, 'DUPLICATE_PHONE_NUMBER');
    }
  };
}

module.exports = { UserDao };
