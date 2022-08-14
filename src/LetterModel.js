const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },

    First: {
        type: String,
        required: true
    },

    Second: {
        type: String,
        required: true
    },

    Third: {
        type: String,
        required: true
    },
});

const LetterModel = new mongoose.model('LetterModel', Schema);
module.exports = LetterModel;