//Import all required modules
const express = require('express');
const path = require('path');
const fs = require('fs');

// Initialize express app
const app = express();

// Import routers
const {newDig, indexPage, dig, done, about} = require('./routes/router');

const port = 5900;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // parse form data client
app.use(express.static(path.join(__dirname, '/'))); // configure express to use public folder

// Routes for the app
app.get('/', indexPage); // Route for loading the front page.
app.get('/dig', dig); // Route for loading the add dig page.
app.post('/new', newDig); // Route for posting and processing 'new dig' data.
app.get('/done', done); // Route for posting and processing 'new dig' data.
app.get('/about', about); // Route for posting and processing 'new dig' data.

// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

