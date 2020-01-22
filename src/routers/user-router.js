const express = require('express');
const UserController = require('../controllers/user-controller');
const admin = require('../middleware/admin');
const validate = require('../middleware/validation');
const userValSchema = require('../utils/userValidation');

const userController = new UserController();
const userRouter = new express.Router();

userRouter.get('/:id/pets', userController.getUserPets);
userRouter.get('/:id', userController.getUserById);
userRouter.get('', userController.getAllUsers);
userRouter.post('', validate(userValSchema), userController.addUser);
userRouter.post('/login', userController.login);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);

module.exports = userRouter;