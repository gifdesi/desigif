// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var home       = require('./routes/home');
var images     = require('./routes/images');

var port = process.env.PORT || 8080;        // set our port

app.use('/', home);
app.use('/images', images);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
