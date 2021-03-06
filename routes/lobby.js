var express = require('express');
var router = express.Router();
const model = require('../models/active-lobbies');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('lobby', { roomName: req.query.room });
});

router.get('/haspass/:name', (req, res) => {
  res.send(model.hasPassword(req.params.name));
});

router.get('/checkpass/:name/:pass', (req, res) => {
  res.send(model.checkPassword(req.params.name, req.params.pass));
});

router.get('/model/:name', (req, res, next) => {
  res.send(model.inList(req.params.name));
});

router.post('/', function(req, res, next) {
  model.addToList(req.body.roomName, req.body.password);
  res.render('lobby', { roomName: req.body.roomName, map: req.body.selectedMap });
});

module.exports = router;
