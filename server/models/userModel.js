const mongoose = require('mongoose');

// Defining the model schema for musicart members : musicarts (in MongoDB) 
const userModel = mongoose.model('Musicart', {
    name: {
        type: String,
        required:true,
        trim:true       // for removing white spaces if any
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    } ,
    phone: {
        type:String,
        required:true
    }
});

module.exports = userModel;
