/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /trips              ->  index
 * POST    /trips              ->  create
 * GET     /trips/:id          ->  show
 */

'use strict';

var _ = require('lodash');
var Trip = require('./trip.model');

// Get list of trips
exports.index = function(req, res) {
  Trip.find(function (err, trips) {
    if(err) { return handleError(res, err); }
    return res.json(200, trips);
  });
};

// Get a single trip
exports.show = function(req, res) {
  Trip.findById(req.params.id, function (err, trip) {
    if(err) { return handleError(res, err); }
    if(!trip) { return res.send(404); }
    return res.json(trip);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}