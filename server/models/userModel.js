const mongoose = require('mongoose');

// Defining the model schema for musicart members 
const userModel = mongoose.model('Musicart', {
    name: String,
    phone: String,
    email: String,
    password: String
});

module.exports = userModel;
