const Venues = require('../models/Venues');
const geolib = require('geolib');


const getVenues = async (req, res) => {
    const venues = await Venues.find();
    res.json(venues);
}


const getVenueById = async (req, res) => {
    try {
        const venue = await Venues.findById(req.params.id);
        res.json(venue);
    }
    catch (err) {
        return res.status(500).send(`could not find venue`)
    }
}

const filterVenues = async (req, res) => {
    try {
        console.log('request for filtered venues received.');
        console.log(req.body);
        const filters = {};

        if ('startTime' in req.body) {
            console.log('found start time');
            filters['hours.start'] = { $lte: req.body.startTime };
        }
        if ('endTime' in req.body) {
            console.log('found end time');
            filters['hours.end'] = { $gte: req.body.endTime };
        }
        if ('rating' in req.body) {
            console.log('found rating');
            filters['rating'] = { $gte: parseInt(req.body.rating) };
        }

        if ('distance' in req.body && 'userLocation' in req.body) {
            console.log('found distance');
            const userLat = parseFloat(req.body.userLocation.lat);
            const userLon = parseFloat(req.body.userLocation.lon);
            const distanceInMiles = parseFloat(req.body.distance);

            // Convert distance in miles to degrees latitude and longitude
            const degreeDistance = distanceInMiles / 69.0;

            filters['address.lat'] = {
                $lte: userLat + degreeDistance,
                $gte: userLat - degreeDistance
            };
            filters['address.lon'] = {
                $lte: userLon + degreeDistance / Math.cos(userLat * (Math.PI / 180)),
                $gte: userLon - degreeDistance / Math.cos(userLat * (Math.PI / 180))
            };
        }

        
        console.log(filters);
        const venues = await Venues.find(filters);
        console.log(venues);
        res.json(venues);
    } catch (err) {
        console.log(err);
        res.status(500).send('error: ' + err);
    }
}


const addVenue = async (req, res) => {
    try {
        console.log(req.file)
        console.log(req.body)
        const venue = req.body
        venue.menu = req.file.buffer
        const createdVenue = Venues.create(venue)
        res.send('Succesfully created venue');
    }
    catch (err) {
        return res.status(500).send(`could not create venue`)
    }
}

const editVenue = async (req, res) => {
    try {
        const updates = req.body
        const updatedVenue = await Venues.findByIdAndUpdate(req.params.id, updates, {new: true})
        res.json(updatedVenue)
    }
    catch (err) {
        return res.status(500).send(`could not edit venue`)
    }
}


const deleteVenue = async (req, res) => {
    try {
        const deletedVenue = await Venues.findByIdAndDelete(req.params.id)
        res.json(deletedVenue)
    }
    catch (err) {
        return res.status(500).send(`could not delete venue`)
    }
}


module.exports = {
    getVenues,
    getVenueById,
    filterVenues,
    addVenue,
    editVenue,
    deleteVenue
}