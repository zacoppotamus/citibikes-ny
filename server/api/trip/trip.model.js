'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TripSchema = new Schema({
  'tripduration': Number,
  'starttime': String,
  'stoptime': String,
  'start station id': Number,
  'start station name': String,
  'start station latitude': Number,
  'start station longitude': Number,
  'end station id': Number,
  'end station name': String,
  'end station latitude': Number,
  'end station longitude': Number,
  'bikeid': Number,
  'userType': String,
  'birthYear': Number,
  'gender': String
});

module.exports = mongoose.model('Trip', TripSchema);