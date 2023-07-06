const express = require('express');
const router = express.Router();

const { getUsers, getUserById, addUser, editUser, deleteUser } = require('../controllers/usersController')


router.get('/', getUsers);

router.get('/:id', getUserById);

router.post('/', addUser);

router.patch('/:id', editUser);

router.delete('/:id', deleteUser);


module.exports = router;