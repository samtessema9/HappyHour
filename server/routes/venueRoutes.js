const express = require('express');
const router = express.Router();

const { getVenues, getVenueById, addVenue, editVenue, deleteVenue } = require('../controllers/venuesController');

const handleFileUpload = require('../middleware/upload')


router.get('/', getVenues);

router.get('/:id', getVenueById);

router.post('/', handleFileUpload, addVenue);

router.patch('/:id', editVenue);

router.delete('/:id', deleteVenue);


module.exports = router;