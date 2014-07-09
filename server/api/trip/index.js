'use strict';

var express = require('express');
var controller = require('./trip.controller');

var router = express.Router();

// Only need GET for accessing the DB.
router.get('/', controller.index);
router.get('/:id', controller.show);
// router.post('/', controller.create);
// router.put('/:id', controller.update);
// router.patch('/:id', controller.update);
// router.delete('/:id', controller.destroy);

module.exports = router;