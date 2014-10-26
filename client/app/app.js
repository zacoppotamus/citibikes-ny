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
    .setView([40.785, -73.9], 12);
