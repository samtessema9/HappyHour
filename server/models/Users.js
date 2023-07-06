const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    userName: String,
    password: String
});

module.exports = mongoose.model('User', userSchema);