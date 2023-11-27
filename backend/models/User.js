const mongoose = require('mongoose');

const Usermodel = new mongoose.Schema({
    firstname: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    
})

const User = mongoose.model( "User", Usermodel)

module.exports = User;