
var app = angular.module('teamManager', ['ngRoute'])

app.config(function($routeProvider){
  $routeProvider
  .when('/players/:partial',{
    templateUrl:'partials/players.html',
    controller:"playersController"
  })
  .when('/status/game/:game',{
    templateUrl:'partials/status.html',
    controller:"statusesController"
  })
  .otherwise({
    redirectTo:'/players'
  });
});

module.exports = app
