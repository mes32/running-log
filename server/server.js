const PORT = 5000;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Include server-side routers

// Configure body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure server-side routes

// Serve static files
app.use(express.static('build'));

// Start server listening on PORT
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});