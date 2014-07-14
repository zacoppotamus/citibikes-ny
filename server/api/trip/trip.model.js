'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TripSchema = new Schema({
  'tripduration': Number,
  'starttime': String,
  'stoptime': String,
  'start_sid': Number,
  'start_sname': String,
  'start_slat': Number,
  'start_slon': Number,
  'end_sid': Number,
  'end_sname': String,
  'end_slat': Number,
  'end_slon': Number,
  'bikeid': Number,
  'userType': String,
  'birthyr': Number,
  'gender': String
});

module.exports = mongoose.model('Trip', TripSchema);