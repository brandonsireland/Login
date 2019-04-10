const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExampleSchema = new Schema({
    name: {
        firstName: {
            type: String,
            required: true
         },
        lastName: {
            type: String,
            required: true
         },
       },
    username: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    email: {
        type: String,
        required: true
     },
    hash: String,
    salt: String,
    admin: Boolean,

},{ timestamps: true});

module.exports = mongoose.model('ExampleModel', ExampleSchema);