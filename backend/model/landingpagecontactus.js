const mongoose = require("mongoose");

const Contactus = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'is invalid']
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        match: [/^\d{10}$/, 'is invalid'] // Example pattern for a 10-digit phone number
    },
    message: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

const Contactusmodel = mongoose.model('Contactus', Contactus);

module.exports = Contactusmodel;
