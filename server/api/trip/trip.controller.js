/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /trips              ->  index
 * GET     /trips/:id          ->  show
 * GET     /trips/getStations  ->  getStations
 */

'use strict';

var _ = require('lodash');
var Trip = require('./trip.model');

// Get list of trips
// exports.index = function(req, res) {
//   console.log(Trip.findOne());
//   Trip.find(function (err, trips) {
//     if(err) { return handleError(res, err); }
//     return res.json(200, trips);
//   });
// };

// Greet
// exports.greet = function(req, res) {
//     return res.json('hi');
// }

// Get a single trip
exports.show = function(req, res) {
  console.log(Trip.findOne());
  Trip.findById(req.params.id, function (err, trip) {
    if(err) { return handleError(res, err); }
    if(!trip) { return res.send(404); }
    return res.json(trip);
  });
};

exports.getStations = function(req, res) {
    console.log(req);
    Trip.distinct('start station name', function(err, trip) { 
        if(err) { return handleError(res,err); }
        return res.json(trip);
    });
};

function handleError(res, err) {
  return res.send(500, err);
}