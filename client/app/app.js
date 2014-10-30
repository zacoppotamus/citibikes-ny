'use strict';

angular.module('nyDataApp', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ui.bootstrap',
	'ngRoute'
])
	.config(function ($routeProvider, $locationProvider) {
		$routeProvider
			.otherwise({
				redirectTo: '/'
			});

		$locationProvider.html5Mode(true);
	});

$("body").append("<div id='map'></div>");
$("#map").css({
	'position': 'absolute',
	'top': '0',
	'bottom':'0',
	'width': '100%'
});

L.mapbox.accessToken = 'pk.eyJ1IjoiaXphYyIsImEiOiJTVEZENjZnIn0.MOtaL6W1_VXCc6hhpb26Mw';
var map = L.mapbox.map('map', 'izac.k1ei8mkp')
		.setView([40.73, -74], 13);

console.log("Making request");
// var jqxhr = $.get("/api/stations/getStations", function() {
// 	alert("success");
// })
// 	.done(function() {
// 		console.log("2nd success");
// 	})
// 	.fail(function() {
// 		console.log("error");
// 	})
// 	.always(function(data) {
// 		console.log("finished")
// 	});

var stations;

var stationsJSONRequest = $.getJSON("./data/stations.json", function() {
	console.log("Success getting stations JSON data");
})
	.done(function(data) {
		console.log("done");

		for (var i = 0; i < data.length; i++) {
			console.log(data[i]);
			var pathOptions = {
				stroke: false,
				color: '#000'
			}
			L.circle([data[i].lat, data[i].lon], 100, pathOptions).addTo(map);
		}
	})
	.fail(function() {
		console.log("failure getting data");
	})
	.always(function(data) {
		console.log("finished");
		console.log("Total stations: " + data.length);
	stations = stationsJSONRequest.responseText;
	// console.log(stations);
	});

// console.log(jqxhr);
// console.log(stations);

// jqxhr.always(function() {
// 	stations = jqxhr.responseText;
// 	$.getJSON("/api/stations/getStations", function(data) {
// 		for (var i=0, len=data.length; i<len; i++) {
// 			console.log(data[i]);
// 		}
// 	})
// 	console.log("2nd finished");
// });
