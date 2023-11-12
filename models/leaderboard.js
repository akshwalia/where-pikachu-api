const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const leaderboardSchema = new Schema({
    name: {type: String, required: true},
    timetaken: {type: Number, required: true},
    game: {type: String, required: true},
    date: {type: Date, required: true}
});

module.exports = mongoose.model('Leaderboard', leaderboardSchema);
