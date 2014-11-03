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

var stations = [];

var stationsJSONRequest = $.getJSON("./data/stations.json", function() {
	console.log("Success getting stations JSON data");
})
	.done(function(data) {
		console.log("done");

		console.log(stations);

		for (var i = 0; i < data.length; i++) {
			var pathOptions = {
				stroke: false,
				opacity: 1
			}
			var circleMarker = L.circle([data[i].lat, data[i].lon], 60, pathOptions);

			circleMarker.data = {
				lat: data[i].lat,
				lon: data[i].lon,
				name: data[i].station
			};
			stations.push(data[i]);
			circleMarker.addTo(map)
			.bindPopup(data[i].station)
			.addEventListener('click', function(data) {
				// $.get("/api/")

				$.getJSON("/api/top_dest/" + encodeURIComponent(data.target.data.name), function() {
					console.log("Getting top stations for " + data.target.data.name);
				})
				.done(function(data) {
					console.log("done");
					console.log(data);
					// get and store polyline coordinates from google api and draw route on map
					// for (int i = 0; i < 5; i++) {

					// }
				})
				.fail(function(data) {
					console.log("Couldn't retrieve top stations!");
				});

			});
		}
	})
	.fail(function() {
		console.log("failure getting data");
	})
	.always(function(data) {
		console.log("finished");
		console.log("Total stations: " + data.length);
		// stations = stationsJSONRequest.responseText;
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
