var express = require("express");
var router = express.Router();

// Getting the list of all the images
router.get('/', function(req, res) {
    res.json({ message: 'Getting the list of all the images' });
});

// For uploading the image
router.post('/', function(req, res) {
    res.json(req.body);
});

module.exports = router
