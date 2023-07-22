const Venues = require('../models/Venues');


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
    addVenue,
    editVenue,
    deleteVenue
}