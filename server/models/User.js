const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        firstName: String,
        lastName: String
    },
    username: { 
        type: String, 
        required: true, 
        unique: true 
    },
     local : {
        email: String,
        password: String,
    },
    facebook : {
        id: String,
        token: String,
        name: String,
        email: String
    },
    twitter: {
        id: String,
        token: String,
        displayName: String,
        username: String
    },
    linkedIn: {
        id: String,
        token: String,
        displayName: String,
        username: String
    },
    google: {
        id: String,
        token: String,
        email: String,
        name: String
    }
},{ timestamps: true});

module.exports = mongoose.model('User', UserSchema);