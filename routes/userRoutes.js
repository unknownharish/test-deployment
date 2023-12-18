const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/getUsers', userController.getAllUsers);
router.post('/create-user', userController.createUser);
router.put('/edit-user', userController.editUser);
router.delete('/del-user', userController.deleteUser);

module.exports = router;