const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coordinatesSchema = new Schema({
    minX: {type: Number, required: true},
    maxX: {type: Number, required: true},
    minY: {type: Number, required: true},
    maxY: {type: Number, required: true},
    pokemon: {type: String, required: true},
    game: {type: String, required: true}
});

module.exports = mongoose.model('Coordinates', coordinatesSchema);