const express = require('express');
const router = express.Router();

const { getUsers, getUserById, addUser, editUser, deleteUser, loginUser } = require('../controllers/usersController')


router.get('/', getUsers);

router.get('/:id', getUserById);

router.post('/login', loginUser);

router.post('/register', addUser);

router.patch('/:id', editUser);

router.delete('/:id', deleteUser);


module.exports = router;