// Create web server
// Create an Express app
var express = require('express');
var app = express();

// Create an array of comments
var comments = [
    { name: 'John', comment: 'Hello!' },
    { name: 'Mary', comment: 'Goodbye!' }
];

// Create a route for getting all comments
app.get('/comments', function(req, res) {
    res.json(comments);
});

// Start the web server on port 3000
app.listen(3000, function() {
    console.log('Web server started on port 3000');
});