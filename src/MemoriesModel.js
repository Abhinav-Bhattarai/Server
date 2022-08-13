import mongoose from 'mongoose';

const Schema = mongoose.Schema({
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

export const MemoriesModel = mongoose.model('MemoriesModel', Schema);