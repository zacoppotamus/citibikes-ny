'use strict';

var express = require('express');
var controller = require('./trip.controller');

var router = express.Router();

// Only need GET for accessing the DB.
// router.get('/getStations', controller.getStations);
router.get('/top_dest/:sname&limit=:limit', controller.topDest);
router.get('/top_dest/:sname', controller.topDest);

// router.get('/', controller.all);

module.exports = router;
