const express = require('express');
const UserController = require('../controllers/user-controller');
const admin = require('../middleware/admin');

const userController = new UserController();
const router = new express.Router();

router.get('', admin, userController.getAllUsers);
router.get('/:id', admin, userController.getUserById);
router.post('', admin, userController.addUser);
router.put('/:id', admin, userController.updateUser);
router.delete('/:id', admin, userController.deleteUser);

module.exports = router;