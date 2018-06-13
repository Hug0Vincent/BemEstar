'use strict';

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

// ROUTES FOR API
// =============================================================================
var router = express.Router();
var coach = require('./routes/coach');
var comment = require('./routes/comment');

app.use('/api/coach', coach);
app.use('/api/comment', comment);

app.get('/api', function (req, res) {
    res.sendFile(path.join(__dirname, 'api.json'));
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    //res.send({message:"This API endpoint doesn't exist"})
});

router.use(function (req, res, next) {

    console.log('requete : ' + req.url);
    next();
});

// Export the app instance for unit testing via supertest
module.exports = app;