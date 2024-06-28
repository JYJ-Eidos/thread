const express = require('express');
const userRouter = express.Router();
const { UserController } = require('../controllers/user.controller');
const userController = new UserController();

userRouter.post('/signup', userController.signUp);
userRouter.post('/login', userController.login);

module.exports = { userRouter };
