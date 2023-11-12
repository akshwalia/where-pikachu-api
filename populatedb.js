//Pikachu X(31.5,46) Y(76.4,83.5)
//Eevee X(62.9,71.4) Y(10.4,15.8)
//Meowth X(86,97) Y(63,70.09)

// Mr. Mime X(50,56.8) Y(53.8,59.2) 
// Pikachu X(77.2,82.5) Y(42.3,47.3)
// Azurill X(41.2,45.55) Y(76.2,81.5)

//Donphan X(14.2,22) Y(39.6,44.3)
//Pikachu X(9.7,14.5) Y(95.5, 100)
//Smeargle X(75, 81.7) Y(47.4,52.75)

const mongoose = require('mongoose');
const Coordinates = require('./models/coordinates');
const Leaderboard = require('./models/leaderboard');

const mongodb = 'mongodb+srv://akshwalia:princy2526@aksh.03qvbac.mongodb.net/where_pikachu?retryWrites=true&w=majority';

async function connect() {
    await mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to database!');
    await populateCoordinates();
    await populateLeaderboard();
    mongoose.disconnect();
    console.log('Disconnected from database!');
}

connect().catch(error => console.error(error.stack));

async function populateCoordinates() {
    const coordinates = [
        {minX: 31.5, maxX: 46, minY: 76.4, maxY: 83.5, pokemon: 'Pikachu', game: '1', date: Date.now()},
        {minX: 62.9, maxX: 71.4, minY: 10.4, maxY: 15.8, pokemon: 'Eevee', game: '1', date: Date.now()},
        {minX: 86, maxX: 97, minY: 63, maxY: 70.09, pokemon: 'Meowth', game: '1', date: Date.now()},
        {minX: 50, maxX: 56.8, minY: 53.8, maxY: 59.2, pokemon: 'Mr. Mime', game: '2', date: Date.now()},
        {minX: 77.2, maxX: 82.5, minY: 42.3, maxY: 47.3, pokemon: 'Pikachu', game: '2', date: Date.now()},
        {minX: 41.2, maxX: 45.55, minY: 76.2, maxY: 81.5, pokemon: 'Azurill', game: '2', date: Date.now()},
        {minX: 14.2, maxX: 22, minY: 39.6, maxY: 44.3, pokemon: 'Donphan', game: '3', date: Date.now()},
        {minX: 9.7, maxX: 14.5, minY: 95.5, maxY: 100, pokemon: 'Pikachu', game: '3', date: Date.now()},
        {minX: 75, maxX: 81.7, minY: 47.4, maxY: 52.75, pokemon: 'Smeargle', game: '3'}
    ];

    try {
        await Coordinates.insertMany(coordinates);
        console.log('Coordinates inserted successfully!');
    } catch (err) {
        console.log(err.message);
    }
}

async function populateLeaderboard() {
    const leaderboard = [
        {name: 'Aksh', timetaken: 44, game: '1', date: Date.now()},
        {name: 'Harry', timetaken: 55, game: '1', date: Date.now()},
        {name: 'Ron', timetaken: 60, game: '1', date: Date.now()},
        {name: 'Hermione', timetaken: 65, game: '1', date: Date.now()},
        {name: 'John', timetaken: 86, game: '1', date: Date.now()},
        {name: 'Jane', timetaken: 59, game: '1', date: Date.now()},
        {name: 'Aksh', timetaken: 44, game: '2', date: Date.now()},
        {name: 'Sheldon', timetaken: 32, game: '2', date: Date.now()},
        {name: 'Leonard', timetaken: 90, game: '2', date: Date.now()},
        {name: 'Penny', timetaken: 65, game: '2', date: Date.now()},
        {name: 'Raj', timetaken: 86, game: '2', date: Date.now()},
    ];

    try {
        await Leaderboard.insertMany(leaderboard);
        console.log('Leaderboard inserted successfully!');
    } catch (err) {
        console.log(err.message);
    }
}