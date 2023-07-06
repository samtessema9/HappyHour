const Users = require('../models/Users');

const getUsers = async (req, res) => {
    res.send('all the Users');
}


const getUserById = async (req, res) => {
    try {
        res.send(`Here's User id number: ${req.params.id}`);
    }
    catch (err) {
        res.send(`could not find user.`)
    }
}


const addUser = async (req, res) => {
    try {
        const user = req.body
        res.send(`Created User: ${user}`)
    }
    catch (err) {
        res.send(`could not create user.`)
    }
}

const editUser = async (req, res) => {
    try {
        res.send(`edited User: ${req.params.id}`)
    }
    catch (err) {
        res.send(`could not edit user.`)
    }
}


const deleteUser = async (req, res) => {
    try {
        res.send(`deleted User: ${req.params.id}`)
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