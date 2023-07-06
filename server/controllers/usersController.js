const Users = require('../models/Users');
const bcrypt = require('bcrypt');

const getUsers = async (req, res) => {
    const users = await Users.find()
    res.json(users);
}


const getUserById = async (req, res) => {
    try {
        const user = await Users.findById(req.params.id);
        res.json(user);
    }
    catch (err) {
        res.send(`could not find user.`)
    }
}


const addUser = async (req, res) => {
    try {
        const user = req.body
        
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(user.password, salt)
        user.password = hashedPassword;

        const newUser = await Users.create(user)

        res.json({newUser})
    }
    catch (err) {
        res.send(`could not create user.`)
    }
}

const editUser = async (req, res) => {
    try {
        const updates = req.body
        const updatedUser = await Users.findByIdAndUpdate(req.params.id, updates, {new: true})
        res.json(updatedUser)
    }
    catch (err) {
        res.send(`could not edit user.`)
    }
}


const deleteUser = async (req, res) => {
    try {
        const deletedUser = await Venues.findByIdAndDelete(req.params.id)
        res.json(deletedUser)
    }
    catch (err) {
        res.send(`could not delete user.`)
    }
}


module.exports = {
    getUsers,
    getUserById,
    addUser,
    editUser,
    deleteUser
}