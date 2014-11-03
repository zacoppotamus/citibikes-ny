/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /getStations     ->  getStations -> (get all station names)
 * GET     /top_dest/:sname&limit=:limit?      ->  get top N destinations
 *         (defaults to 5)
 * GET     /    ->  all
 */

'use strict';

var _ = require('lodash');
var Trip = require('./trip.model');


// Get a single trip
exports.all = function(req, res) {
	var fields = _.keys(req.query).join(' ');

	console.log(req.query);

	Trip.find(req.query, function (err, trip) {
		if(err) { return handleError(res, err); }
		if(!trip) { return res.send(404); }
		return res.json(trip);
	});

};

// exports.getStations = function(req, res) {

//     Trip.aggregate(
//       [
//         {
//           "$group" : {
//             _id : {start_sname: "$start_sname", lat: "$start_slat", lon: "$start_slon"}
//           }
//         }
//       ], function(err, results) {
//         if(err) { return handleError(res,err); }
//         return res.json(results);
//     });

// };

exports.topDest = function(req, res) {
	req.params.sname = decodeURIComponent(req.params.sname.split('+').join(' '))
	console.log('sname is: '+req.params.sname);
	var queryLimit = req.params.limit || 5; // limit defaults to 5
	console.log('queryLimit is ' + queryLimit);
	Trip.aggregate(
		[
			{"$match" : {"start_sname" : req.params.sname}},
			{"$group" : {"_id" : {name: "$end_sname", lat: "$end_slat", lon: "$end_slon"}, sum : {"$sum":1}}},
			{"$sort" : {"sum" : -1}},
			{"$limit" : 5}
		], function(err, results) {
			return res.json(results);
	});
};


function handleError(res, err) {
	return res.send(500, err);
}
