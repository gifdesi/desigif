
 // User: Name, Phone number
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/desigif');

userSchema = {
  name: String,
  phone_number: String
}

var User = mongoose.model('User', userSchema);

module.exports = User
