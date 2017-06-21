
var app = angular.module('theWall', ['ngRoute', 'ngCookies'])

app.config(function($routeProvider){
  $routeProvider
  .when('/login',{
    templateUrl:'partials/login.html',
    controller:'loginController'
  })
  .when('/register',{
    templateUrl:'partials/register.html',
    controller:'registerController'
  })
  .when('/home',{
    templateUrl:'partials/wall.html',
    controller:'wallController'
  })
  .otherwise({
    redirectTo:'/login'
  });
});

module.exports = app
