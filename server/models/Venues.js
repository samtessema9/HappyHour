const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    imgLink: {type: String, default: "https://www.mashed.com/img/gallery/yes-a-bar-that-rotates-while-you-drink-really-exists/intro-1648734567.jpg"},
    rating: {type: Number, min: 0, max: 5, default: 3},
    hours: {
        start: {type: String, required: true},
        end: {type: String, required: true}
    },
    phoneNumber: {type: Number},
    siteLink: {type: String},
    menu: {type: Buffer}
});

module.exports = mongoose.model('Venue', venueSchema);
