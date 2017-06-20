
var app = angular.module('loginAndRegistration', ['ngRoute'])

app.config(function($routeProvider){
  $routeProvider
  .when('/login',{
    templateUrl:'partials/login.html',
    controller:"loginController"
  })
  .when('/register',{
    templateUrl:'partials/register.html',
    controller:"registerController"
  })
  .when('/success',{
    templateUrl:'partials/success.html',
    controller:"successController"
  })
  .otherwise({
    redirectTo:'/login'
  });
});

module.exports = app
