const Venues = require('../models/Venues');

const getVenues = async (req, res) => {
    res.send('all the venues');
}


const getVenueById = async (req, res) => {
    try {
        res.send(`Here's venue id number: ${req.params.id}`);
    }
    catch (err) {
        res.send(`could not find venue`)
    }
}


const addVenue = async (req, res) => {
    try {
        const venue = req.body
        res.send(`Created venue: ${venue}`)
    }
    catch (err) {
        res.send(`could not create venue`)
    }
}

const editVenue = async (req, res) => {
    try {
        res.send(`edited venue: ${req.params.id}`)
    }
    catch (err) {
        res.send(`could not edit venue`)
    }
}


const deleteVenue = async (req, res) => {
    try {
        res.send(`deleted venue: ${req.params.id}`)
    }
    catch (err) {
        res.send(`could not delete venue`)
    }
}


module.exports = {
    getVenues,
    getVenueById,
    addVenue,
    editVenue,
    deleteVenue
}