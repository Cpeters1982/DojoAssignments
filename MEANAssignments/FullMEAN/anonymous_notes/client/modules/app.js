
var app = angular.module('anonymousNotes', ['ngRoute'])

app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'partials/anonymous_notes.html'
  })
  .otherwise({
    redirectTo:'/'
  });
});

module.exports = app
