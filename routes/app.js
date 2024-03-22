// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of express app
const app = express();

// Set up middleware to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sample data - in a real application, this would likely be stored in a database
let items = ["test"];

// Define GET route to fetch items
app.get('/items', (req, res) => {
    res.json(items[0]);
});

// Define POST route to add items
app.post('/items', (req, res) => {
    const newItem = req.body; // assuming the request body contains the item to be added
    items.push(newItem);
    res.status(201).json(newItem);
});

// Define a catch-all route for unsupported routes
app.use((req, res) => {
    res.status(404).send('Route not found');
});

// Start the server
const PORT = process.env.PORT || 3000; // Use the provided port or default to 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
