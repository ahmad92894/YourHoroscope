const { Schema, model } = require('mongoose');

const HoroSchema = new Schema({
    Sign: {
        type: String,
    },
    Birthday: {
        type: String,
    },
    Element: {
        type: String,
    },
    Symbol: {
        type: String
    },
    Background: {
        type: String,
    },
    Personality_Traits: {
        type: String
    },
    Most_Compatible: {
        type: String
    } 

});

const Horoscope = model('Horoscope', HoroSchema);

module.exports = Horoscope;