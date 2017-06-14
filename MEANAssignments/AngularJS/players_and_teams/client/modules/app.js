
var app = angular.module('app', ['ngRoute'])

app.config(function($routeProvider){
  $routeProvider
  .when('/players',{
    templateUrl:'partials/players.html'
  })
  .when('/teams',{
    templateUrl:'partials/teams.html'
  })
  .when('/associations',{
    templateUrl:'partials/associations.html'
  })
  .when('/:team', {
    templateUrl:'partials/players.html'
  })
  .otherwise({
    redirectTo:'/players'
  });
});

module.exports = app
