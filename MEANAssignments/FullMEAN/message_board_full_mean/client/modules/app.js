
var app = angular.module('messageBoard', ['ngRoute'])

app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'partials/message_board.html'
  })
  .otherwise({
    redirectTo:'/'
  });
});

module.exports = app
