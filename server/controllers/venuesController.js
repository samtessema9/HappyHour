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

const filterVenues = async (req, res) => {
    try {
        console.log('request for filtered venues received.')
        const filters = {}
        console.log(req.body)

        if ('start.time' in req.body) {
            console.log('found start time')
            filters['start.time'] = req.body['start.time']
        }
        if ('end.time' in req.body) {
            console.log('found end time')
            filters['end.time'] = req.body['end.time']
        }
        if ('rating' in req.body) {
            console.log('found rating')
            filters['rating'] = { $gte: req.body['rating'] }
        }

        const venues = await Venues.find(filters)

        if (venues.length > 0) {
            res.json(venues)
        } else {
            res.status(404).send('no venues found')
        }

    }
    catch (err) {
        console.log(err)
        res.status(500).send('error: ' + err)
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