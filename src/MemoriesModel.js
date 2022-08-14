const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    Initiator: {
        type: String,
        required: true
    },

    Photo: {
        type: String,
        required: true
    },

    Favorites: {
        type: Boolean,
        default: false
    }
});

const MemoriesModel = new mongoose.model('MemoriesModel', Schema);

module.exports = MemoriesModel;