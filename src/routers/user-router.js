const express = require('express');
const UserController = require('../controllers/user-controller');
const admin = require('../middleware/admin');

const userController = new UserController();
const userRouter = new express.Router();

userRouter.get('', userController.getAllUsers);
userRouter.get('/:id', userController.getUserById);
userRouter.get('/:id/pets', userController.getUserPets);
userRouter.post('', userController.addUser);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);

module.exports = userRouter;