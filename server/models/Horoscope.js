const { Schema, model } = require('mongoose');

const HoroSchema = new Schema({
    sign: {
        type: String,
    },
    birthday: {
        type: String,
    },
    element: {
        type: String,
    },
    symbol: {
        type: String
    },
    background: {
        type: String,
    },
    personality_traits: {
        type: String
    },
    most_compatible: {
        type: String
    } 

});

const Horoscope = model('Horoscope', HoroSchema);

module.exports = Horoscope;