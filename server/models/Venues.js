const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
    // name
    // description
    // hours
    // img
    // address
    // rating
});

module.exports = mongoose.model('Venue', venueSchema);

