// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var home       = require('./routes/home');
var users     = require('./routes/users');
var images     = require('./routes/images');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var port = process.env.PORT || 8080;        // set our port

app.use('/', home);
app.use('/users', users);
app.use('/images', images);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
