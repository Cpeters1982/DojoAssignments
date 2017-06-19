(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(app){
  app.controller('playersController', function($scope, playerFactory, $routeParams, $location){

    $scope.partial = $routeParams.partial;
    $scope.players = [];

    var setPlayers = function(data){
      $scope.newPlayer = {}
      if(data){
        $scope.players = data
      } else {
        $scope.players = [];
        console.log("Failed to get players")
      }

    }
    // var returnToList = function(){
    //   $location.url('/players/list')
    // }

    playerFactory.getPlayers(setPlayers);

    $scope.addPlayer = function(){
      playerFactory.createPlayer($scope.newPlayer, setPlayers)
    }

    $scope.removePlayer = function(id){
      playerFactory.deletePlayer(id, setPlayers);
    }


  })
}

},{}],2:[function(require,module,exports){
module.exports = function(app){
  app.controller('statusesController', function($scope, playerFactory, $routeParams){
    console.log("In statusesController")
    $scope.game = $routeParams.game;
    $scope.players = [];

    var setPlayers = function(data){
      if(data){
        $scope.players = data
        console.log("Set players")
      } else {
        $scope.players = [];
        console.log("Failed to get players")
      }
    }

    playerFactory.getPlayers(setPlayers);

    $scope.determineSelected = function(player, pos){
      return $scope.game == 1 && player.game_1_pos == pos || $scope.game == 2 && player.game_2_pos == pos || $scope.game == 3 && player.game_3_pos == pos
    }

    $scope.updatePlayer = function(id, status){
      var updates = {};
      if ($scope.game == 1){
        updates.game_1_pos = status
      } else if ($scope.game == 2){
        updates.game_2_pos = status
      } else if ($scope.game == 3){
        updates.game_3_pos = status
      }
      playerFactory.updatePlayer(id, updates, setPlayers)
    }


  })
}

},{}],3:[function(require,module,exports){
module.exports = function(app){

  app.factory('playerFactory', function($http){

    var factory = {};

    factory.players = [];

    factory.getPlayers = function(success){

      $http.get('/players').then(function(response){
        // console.log("RESPONSE FROM API IN GET NOTES:", response);
        factory.players = response.data
        if (typeof(success) == 'function'){
          success(factory.players);
        } else {
          throw "ERROR: callback must be a function!"
        }

      })

    }


    factory.createPlayer = function(postData, success){

      $http.post('/players', postData).then(function(response){
        // console.log(response);
        if(response.data.result == 'failure'){
          console.log(response.data.errors);

        } else {
          console.log("Success!")
          console.log(response.data.player)
        }
        factory.getPlayers(success);

      })

    }

    factory.deletePlayer = function(id, success){

      $http.post('/players/' + id + '/delete').then(function(response){
        // console.log(response);
        if(response.data.result == 'failure'){
          console.log(response.data.errors);

        } else {
          console.log("Success!")
          console.log(response.data.player)
        }
        factory.getPlayers(success);

      })
    }

    factory.updatePlayer = function(id, postData, success){

      $http.post('/players/' + id, postData).then(function(response){
        // console.log(response);
        if(response.data.result == 'failure'){
          console.log(response.data.errors);

        } else {
          console.log("Success!")
          console.log(response.data.player)
        }
        factory.getPlayers(success);

      })

    }




    return factory;


  })




}

},{}],4:[function(require,module,exports){

var app = require('./modules/app.js')

var setupPlayerFactory = require('./factories/player.js')
setupPlayerFactory(app)

var setupStatusesController = require('./controllers/statusesController.js')
setupStatusesController(app)

var setupPlayersController = require('./controllers/playersController.js')
setupPlayersController(app)

},{"./controllers/playersController.js":1,"./controllers/statusesController.js":2,"./factories/player.js":3,"./modules/app.js":5}],5:[function(require,module,exports){

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

},{}]},{},[4]);
