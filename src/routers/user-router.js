const express = require('express');
const UserController = require('../controllers/user-controller');
const admin = require('../middleware/admin');

const userController = new UserController();
const router = new express.Router();

router.get('', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('', userController.addUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;