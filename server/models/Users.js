const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // name
    // description
    // hours
    // img
    // address
    // rating
});

module.exports = mongoose.model('User', userSchema);