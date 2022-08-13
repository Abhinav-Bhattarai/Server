import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    User: {
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

    Date: {
        type: String,
        default: new Date(parseInt(Date.now())).toLocaleDateString()
    }
});

export const LetterModel = new mongoose.model('LetterModel', Schema);