// server.js
const express = require('express');                 // Import the express framework for building the server
const cors = require('cors');                       // Import the CORS middleware to handle cross-origin requests
const path = require('path');                       // Import the path module to work with file paths
const fs = require('fs');                           // Import the fs (file system) module to read files
const app = express();                              // Create an instance of an Express application
app.use(cors());                                    // Enable Cross-Origin Resource Sharing (CORS) for all routes
app.use(express.json());                            // Middleware to parse incoming JSON requests
const dataFile = path.join(__dirname, 'data.json'); // Define the path to the data.json file
// API Routes
// Route to get all listings: http://localhost:5000/api/listings/
app.get('/api/listings', (req, res) => {
  fs.readFile(dataFile, 'utf8', (err, data) => {     // Read the data from data.json and send it as a response
    if (err)
    {
      console.log('Error reading data file:', err);  // Log error if the file can't be read
      return res.status(500).send('Server Error');   // Send 500 status if there's an error
    }
    res.json(JSON.parse(data));                      // Parse the JSON data and send it as the response
  });
});
// Route to get a listing by its ID: http://localhost:5000/api/listings/1
app.get('/api/listings/:id', (req, res) => {
  fs.readFile(dataFile, 'utf8', (err, data) => {                                  // Read the data from data.json and find the listing with the provided ID
    if (err)
    {
      console.log('Error reading data file:', err);                               // Log error if the file can't be read
      return res.status(500).send('Server Error');                                // Send 500 status if there's an error
    }
    const listings = JSON.parse(data);                                            // Parse the data into a JavaScript object
    const listing = listings.find((item) => item.id === parseInt(req.params.id)); // Find the listing by ID
    if (listing)
    {
      res.json(listing);                                                          // If found, send the listing as a JSON response
    }
    else
    {
      res.status(404).send('Listing not found');                                  // Send 404 if the listing with the specified ID is not found
    }
  });
});
// Route to get listings by location: http://localhost:5000/api/listings/location/Toronto
app.get('/api/listings/location/:location', (req, res) => {
  const location = req.params.location.toLowerCase();                                                         // Normalize location to lowercase for case-insensitive search
  fs.readFile(dataFile, 'utf8', (err, data) => {
    if (err)
    {
      console.log('Error reading data file:', err);                                                           // Log error if the file can't be read
      return res.status(500).send('Server Error');                                                            // Send 500 status if there's an error
    }
    const listings = JSON.parse(data);                                                                        // Parse the data into a JavaScript object
    const filteredListings = listings.filter((listing) => listing.location.toLowerCase().includes(location)); // Filter listings by location (case-insensitive match)
    if (filteredListings.length > 0)
    {
      res.json(filteredListings);                                                                             // If matching listings are found, send them as a JSON response
    }
    else
    {
      res.status(404).send('No listings found for this location');                                            // Send 404 if no matching listings are found
    }
  });
});
// Route to get listings by category: http://localhost:5000/api/listings/category/budget
app.get('/api/listings/category/:category', (req, res) => {
  const category = req.params.category.toLowerCase();                                                         // Normalize location to lowercase for case-insensitive search
  fs.readFile(dataFile, 'utf8', (err, data) => {
    if (err)
    {
      console.log('Error reading data file:', err);                                                           // Log error if the file can't be read
      return res.status(500).send('Server Error');                                                            // Send 500 status if there's an error
    }
    const listings = JSON.parse(data);                                                                        // Parse the data into a JavaScript object
    const filteredListings = listings.filter((listing) => listing.category.toLowerCase().includes(category)); // Filter listings by location (case-insensitive match)
    if (filteredListings.length > 0)
    {
      res.json(filteredListings);                                                                             // If matching listings are found, send them as a JSON response
    }
    else
    {
      res.status(404).send('No listings found for this category');                                            // Send 404 if no matching listings are found
    }
  });
});
// Mock booking process (for testing purposes): http://localhost:5000/api/bookings
app.post('/api/bookings', (req, res) => {
  const {listingId, username, checkIn, checkOut} = req.body;
  res.send("Booking Successfull");
});
// Start the server on port 5000
app.listen(5000, () => {
  console.log('Server is running on port 5000');  // Log a message to indicate the server is running
});