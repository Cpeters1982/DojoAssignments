
var app = angular.module('gitHubBattle', ['ngRoute'])

app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'partials/battle.html'
  })
  .when('/results',{
    templateUrl:'partials/results.html'
  })
  .when('/rankings',{
    templateUrl:'partials/rankings.html'
  })
  .otherwise({
    redirectTo:'/'
  });
});

module.exports = app
