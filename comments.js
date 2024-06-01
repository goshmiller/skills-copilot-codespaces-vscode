//create web server
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.json());

//get comments
app.get('/comments', (req, res) => {
    fs.readFile('comments.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading comments.json');
            return;
        }

        const comments = JSON.parse(data);
        res.send(comments);
    });
});

//post comments
app.post('/comments', (req, res) => {
    const comment = req.body;
    if (!comment.author || !comment.text) {
        res.status(400).send('Author and text are required');
        return;
    }

    fs.readFile('comments.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading comments.json');
            return;
        }

        const comments = JSON.parse(data);
        comments.push(comment);

        fs.writeFile('comments.json', JSON.stringify(comments, null, 2), (err) => {
            if (err) {
                res.status(500).send('Error writing comments.json');
                return;
            }

            res.send(comment);
        });
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});