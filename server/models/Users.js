const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    userName: String,
    password: String
}, 
    {
        timestamps: true,
        toJSON: {
            transform: (doc, ret) => {
                delete ret.password;
            }
        }
    }
);

module.exports = mongoose.model('User', userSchema);