var express = require("express");
var router = express.Router();
var User = require("../models/User");

// Getting the list of all the images
router.get('/', function(req, res) {
    User.find(
      function (err, data) {
        if (err) return res.json(err);
        res.json(data);
      }
    )
});

// For uploading the image
router.post('/', function(req, res) {
    var user_detials = {
      name: req.body.name,
      phone_number: req.body.phone_number
    }
    var user = new User(user_detials);
    user.save(
      function (err) {
        if (err) {
          res.json(err);
        } else {
          res.json(user_detials);
        }
      }
    )
});

module.exports = router
