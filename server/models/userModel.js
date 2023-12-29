const mongoose = require('mongoose');

// Defining the model schema for musicart members 
const userModel = mongoose.model('Musicart', {
    mName: String,
    mEmail: String,
    mPassword: String,
    isAdmin: Boolean
});

module.exports = userModel;
