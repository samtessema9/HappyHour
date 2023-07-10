const Users = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler')

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
  }

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
        const {userName, password, name} = req.body

        const user = await Users.find({userName})

        if (user) {
            return res.status(400).json({error: 'user already exists'})
        }
        
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(user.password, salt)
        user.password = hashedPassword;

        const newUser = await Users.create(user)

        res.json({user: newUser})
    }
    catch (err) {
        res.send(`could not create user.`)
    }
}

const loginUser = asyncHandler( async (req, res) => {
    try {
        // console.log(req.body)
        const {userName, password} = req.body
  
        const user = await Users.findOne({userName: userName})
    
        if (!user) {
            return res.json({error: "User not found"}).status(404)
        }
    
        const correctPassword = await bcrypt.compare(password, user.password)

        if (!correctPassword) {
            return res.json({error: "Incorrect password"}).status(404)
        } 

        res.json({
            user: user,
            token: generateToken(user._id)
        })
    }
    catch (err) {
        res.json({error: err.message}).status(400)
    }

})

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
    loginUser,
    editUser,
    deleteUser
}