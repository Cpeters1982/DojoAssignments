(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(app){
  app.controller('customizeUsersController', ['$scope', '$location', 'userFactory', function($scope, $location, userFactory){

    $scope.users = [];

    var setUsers = function(data){
      $scope.users = data;
      $scope.newUser = {};
    }

    userFactory.getUsers(setUsers);


    $scope.addUser = function(){
      userFactory.createUser($scope.newUser, setUsers);
      $location.url('/list');
    }

    $scope.removeUser = function(index){
      userFactory.deleteUser(index, setUsers);
    }

  }])
}

},{}],2:[function(require,module,exports){
module.exports = function(app){
  app.controller('userListsController', ['$scope', 'userFactory', function($scope, userFactory){

    $scope.users = [];

    userFactory.getUsers(function(data){
      $scope.users = data
    });


  }])
}

},{}],3:[function(require,module,exports){
module.exports = function(app){
  app.factory('userFactory', function(){

    var factory = {}

    var users = [
      {firstName:"Nick", lastName:"deLannoy", language:"Swift"},
      {firstName:"Ted", lastName:"Mitka", language:"Python"},
      {firstName:"Armando", lastName:"Amador", language:"Ruby"},
    ]

    factory.getUsers = function(callback){
      //refresh users from database here
      callback(users);
    }

    factory.createUser = function(newUser, callback){
      //add user to database here and then call get users again
      users.push(newUser);
      factory.getUsers(callback);
    }
    factory.deleteUser = function(index, callback){
      //remove user from database here and then call get users again
      users.splice(index, 1);
      factory.getUsers(callback);
    }

    return factory


  })

}

},{}],4:[function(require,module,exports){

var app = require('./modules/app.js')

var setupUserFactory = require('./factories/userFactory.js')
setupUserFactory(app)

var setupCustomizeUsersController = require('./controllers/customizeUsersController.js')
setupCustomizeUsersController(app)

var setupUserListsController = require('./controllers/userListsController.js')
setupUserListsController(app)

},{"./controllers/customizeUsersController.js":1,"./controllers/userListsController.js":2,"./factories/userFactory.js":3,"./modules/app.js":5}],5:[function(require,module,exports){

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

},{}]},{},[4]);
