var express = require('express');
var router = express.Router();

const Leaderboard = require('../models/leaderboard');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({message: "Welcome to Where's Pikachu API"});
});

router.get('/leaderboard/:game', async function(req, res, next) {
  const game = req.params.game;

  try {
    const leaderboard = await Leaderboard.find({game: game}).sort({timetaken: 1}).select('name timetaken date').exec();
    res.status(200).json(leaderboard);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});

router.post('/leaderboard/:game', async function(req, res, next) {
  const game = req.params.game;
  if(game<1 || game>3){
    res.status(500).json({message: "Invalid game number"});
  }

  const record = new Leaderboard({
    name: req.body.name,
    timetaken: req.body.timetaken,
    game: game,
    date: Date.now()
  });

  try {
    await record.save();
    res.status(200).json({message: "Record saved successfully"});
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});

module.exports = router;
