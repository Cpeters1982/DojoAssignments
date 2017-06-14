(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(app){
  app.controller('associationsController', ['$scope', 'playerFactory', 'teamFactory', function($scope, playerFactory, teamFactory){

    $scope.players = [];
    $scope.teams = [];

    var setPlayers = function(data){
      $scope.players = data;
      $scope.newAssignment = {};
    }
    var setTeams = function(data){
      $scope.teams = data
    }

    playerFactory.getPlayers(setPlayers);
    teamFactory.getTeams(setTeams);



    $scope.assignPlayerToTeam = function(){
      console.log($scope.newAssignment)
      playerFactory.assignPlayerToTeam($scope.newAssignment.player, $scope.newAssignment.team, setPlayers);
    }

    $scope.clearAssignment = function(index){
      playerFactory.clearAssignment(index, setPlayers);
    }

  }])
}

},{}],2:[function(require,module,exports){
module.exports = function(app){
  app.controller('playersController', ['$scope', 'playerFactory', '$routeParams', function($scope, playerFactory, $routeParams){

    console.log($routeParams)
    $scope.players = [];

    var setPlayers = function(data){
      $scope.players = data;
      $scope.newPlayer = {};
      if ($routeParams.team){
        $scope.show = $routeParams.team
        $scope.players = $scope.players.filter(function(player){
          return player.team == $routeParams.team
        })
      }

    }

    playerFactory.getPlayers(setPlayers);

    $scope.addPlayer = function(){
      playerFactory.createPlayer($scope.newPlayer, setPlayers)
    }

    $scope.removePlayer = function(index){
      playerFactory.deletePlayer(index, setPlayers)
    }

  }])
}

},{}],3:[function(require,module,exports){
module.exports = function(app){
  app.controller('teamsController', ['$scope', 'teamFactory', function($scope, teamFactory){

    $scope.teams = [];

    var setTeams = function(data){
      $scope.teams = data
      $scope.newTeam = {}
    }

    teamFactory.getTeams(setTeams);

    $scope.addTeam = function(){
      teamFactory.createTeam($scope.newTeam, setTeams)
    }

    $scope.removeTeam = function(index){
      teamFactory.deleteTeam(index, setTeams)
    }

  }])
}

},{}],4:[function(require,module,exports){
module.exports = function(app){
  app.factory('playerFactory', function(){

    var factory = {}

    var players = [
      {name:"Nick", team:null},
      {name:"Ted", team:null},
      {name:"Armando", team:null},
    ]

    factory.getPlayers = function(callback){
      //refresh players from database here
      callback(players);
    }

    factory.createPlayer = function(newPlayer, callback){
      //add player to database here and then call get players again
      players.push(newPlayer);
      factory.getPlayers(callback);
    }
    factory.deletePlayer = function(index, callback){
      //remove player from database here and then call get players again
      players.splice(index, 1);
      factory.getPlayers(callback);
    }

    factory.assignPlayerToTeam = function(index, team, callback){
      players[index].team = team;
      factory.getPlayers(callback);
    }

    factory.clearAssignment = function(index, callback){
      players[index].team = null;
      factory.getPlayers(callback)
    }


    return factory


  })

}

},{}],5:[function(require,module,exports){
module.exports = function(app){
  app.factory('teamFactory', function(){

    var factory = {}

    var teams = [
      {name:"Seahawks"},
      {name:"49ers"},
      {name:"Honeybadgers"},
    ]

    factory.getTeams = function(callback){
      //refresh teams from database here
      callback(teams);
    }

    factory.createTeam = function(newTeam, callback){
      //add team to database here and then call get teams again
      teams.push(newTeam);
      factory.getTeams(callback);
    }
    factory.deleteTeam = function(index, callback){
      //remove team from database here and then call get teams again
      teams.splice(index, 1);
      factory.getTeams(callback);
    }

    return factory


  })

}

},{}],6:[function(require,module,exports){

var app = require('./modules/app.js')


var setupPlayerFactory = require('./factories/playerFactory.js')
setupPlayerFactory(app)

var setupTeamFactory = require('./factories/teamFactory.js')
setupTeamFactory(app)


var setupPlayersController = require('./controllers/playersController.js')
setupPlayersController(app)

var setupTeamsController = require('./controllers/teamsController.js')
setupTeamsController(app)

var setupAssociationsController = require('./controllers/associationsController.js')
setupAssociationsController(app)

},{"./controllers/associationsController.js":1,"./controllers/playersController.js":2,"./controllers/teamsController.js":3,"./factories/playerFactory.js":4,"./factories/teamFactory.js":5,"./modules/app.js":7}],7:[function(require,module,exports){

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

},{}]},{},[6]);
