const { UserService } = require('../services/user.service');
const userService = new UserService();

class UserController {
  signUp = async (req, res) => {
    const { body } = req;
    try {
      await userService.signUp(body);
      return res.status(201).json({ message: 'SIGNUP_SUCCESSFUL' });
    } catch (err) {
      return res.status(err.status).json({ message: err.message });
    }
  };

  login = async (req, res) => {
    const { body } = req;
    try {
      const token = await userService.login(body);
      res.setHeader('Authorization', token);
      return res.status(200).json({ message: 'LOGIN_SUCCESSFUL' });
    } catch (err) {
      return res.status(err.status).json({ message: err.message });
    }
  };
}

module.exports = { UserController };
