// Importing express and create an instance of an express application
const express = require('express');
const app = express();
// Setting the port for the server to listen on
require('dotenv').config();
const port = process.env.PORT || 3001

const connectToDB = require('./config/db');
connectToDB()

app.use(express.json());

app.use('/venues', require('./routes/venueRoutes'));

app.use('/users', require('./routes/userRoutes'));

// Defining a catch-all route that handles all incoming requests
app.use('*', (req, res) => {
    console.log(`request made form ip: ${req.ip}`)
    res.send('You have reached the catch all route.')
})

// Starting the server and listening on the specified port
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});