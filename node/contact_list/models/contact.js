const mongoose = require('mongoose');


//Configuring Schema for contact in order to communicate properly with mongodb
const ContactSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type:  String,
        required: true
    },

    phone: {
        type:  String,
        required: true
    },

    
});

//Export the Schema so other files can import it
const Contact = module.exports = mongoose.model('Contact', ContactSchema);