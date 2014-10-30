'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var StationSchema = new Schema({
	'station': String,
	'lat': Number,
	'lon': Number
});

module.exports = mongoose.model('Station', StationSchema);
