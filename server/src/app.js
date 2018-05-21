var app = require('./index')
var config = require('./config')
var mongoose = require('mongoose');

const http = require('http');

// START THE SERVER
// =============================================================================

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/bem_estar')
.then(() =>  console.log('connection successful'))
.catch((err) => console.error(err));


const port = config.express.port;
app.set('port', port);


/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));