
var app = angular.module('app', ['ngRoute'])

app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'partials/customizeUsers.html'
  })
  .when('/list',{
    templateUrl:'partials/userList.html'
  })
  .otherwise({
    redirectTo:'/'
  });
});

module.exports = app
