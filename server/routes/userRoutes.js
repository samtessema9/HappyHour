const express = require('express');
const router = express.Router();

const { getUsers, getUserById, addUser, editUser, deleteUser, loginUser, getUserWithToken } = require('../controllers/usersController')


router.get('/', getUserWithToken);

router.get('/:id', getUsers);

router.post('/login', loginUser);

router.post('/register', addUser);

router.patch('/:id', editUser);

router.delete('/:id', deleteUser);


module.exports = router;