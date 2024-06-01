// Create web server and listen on port 3000
// Load the express library
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Load the comments.json file
var comments = require('./comments.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route for the root page
app.get('/', function (req, res) {
    res.send('Hello World!');
});

// Route for the comments page
app.get('/comments', function (req, res) {
    res.json(comments);
});

// Route for adding a new comment
app.post('/comments', function (req, res) {
    var newComment = {
        id: comments.length + 1,
        name: req.body.name,
        comment: req.body.comment
    };

    comments.push(newComment);

    fs.writeFile('./comments.json', JSON.stringify(comments), function (err) {
        if (err) {
            console.log(err);
        }
    });

    res.json(newComment);
});

// Start the server and listen on port 3000
app.listen(3000, function () {
    console.log('Server is running on http://localhost:3000');
});