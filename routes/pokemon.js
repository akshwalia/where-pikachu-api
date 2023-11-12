const express = require('express');
const router = express.Router();

const Coordinates = require('../models/coordinates');

router.post('/:game/:pokemon', async (req, res, next) => {
    const game = req.params.game;
    const pokemon = req.params.pokemon;
    try {
        const coordinates = await Coordinates.findOne({game: game, pokemon: pokemon}).exec();
        const x = req.body.x;
        const y = req.body.y;

        if(x >= coordinates.minX && x <= coordinates.maxX && y >= coordinates.minY && y <= coordinates.maxY){
            res.status(200).json({message: "Correct"});
        } else {
            res.status(200).json({message: "Incorrect"});
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

module.exports = router;
