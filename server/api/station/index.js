'use strict';

var express = require('express');
var controller = require('./station.controller');

var router = express.Router();

// Only need GET for accessing the DB.
router.get('/getStations', controller.getStations);

module.exports = router;
