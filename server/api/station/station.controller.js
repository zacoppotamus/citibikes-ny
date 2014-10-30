/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /getStations     ->  getStations -> (get all station names)
 */

'use strict';

var _ = require('lodash');
var Station = require('./station.model');

// Get a list of all stations
exports.getStations = function(req, res) {
	Station.find(req.query, function(err, station) {
		if (err) { return handleError(res, err); }
		if (!station) { return res.send(404); }
		return res.json(station);
	})

};

function handleError(res, err) {
	return res.send(500, err);
}
