'use strict';

var app = require('./index');
var config = require('./config');
var mongoose = require('mongoose');

var http = require('http');

// START THE SERVER
// =============================================================================

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/bem_estar').then(function () {
  return console.log('connection successful');
}).catch(function (err) {
  return console.error(err);
});

var port = config.express.port;
app.set('port', port);

/**
 * Create HTTP server.
 */
var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, function () {
  return console.log('API running on localhost:' + port);
});