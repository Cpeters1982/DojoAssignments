(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(app){
  app.controller('battleController', ['$scope', 'rankingFactory', '$location', function($scope, rankingFactory, route){

    $scope.player1 = {};
    $scope.player2 = {};
    $scope.readyPlayer1 = false;
    $scope.readyPlayer2 = false;

    var setPlayer = function(data, player){
      if (player == 1){
        if(data){
          $scope.player1 = data;
          $scope.usernameP1 = "";
          $scope.readyPlayer1 = true;
        } else {
          $scope.errorP1 = "GitHub username does not exist, try again"
        }

      } else if (player == 2){
        if (data){
          $scope.player2 = data;
          $scope.usernameP2 = "";
          $scope.readyPlayer2 = true;
        } else {
          $scope.errorP2 = "GitHub username does not exist, try again"
        }

      }
    }

    var showResults = function(){
      route.url('/results')
    }


    $scope.githubProfileLookUp = function(username, playerNum){

      rankingFactory.playerLookup(username, playerNum, setPlayer)

    }

    $scope.battle = function(player1, player2){

      rankingFactory.battle(player1, player2, showResults)

    }

  }])
}

},{}],2:[function(require,module,exports){
module.exports = function(app){
  app.controller('rankingsController', ['$scope', 'rankingFactory', function($scope, rankingFactory){

    $scope.rankings = [];

    var setRankings = function(data){
      if(data){
        $scope.rankings = data;
      } else {
        console.log("Something went wrong")
        $scope.rankings = [];
      }
    }

    rankingFactory.getRankings(setRankings);

  }])
}

},{}],3:[function(require,module,exports){
module.exports = function(app){
  app.controller('resultsController', ['$scope', 'rankingFactory', '$location', function($scope, rankingFactory, route){

    $scope.winner = {};
    $scope.loser = {};


    var setResults = function(data){
      if (data){
        $scope.winner = data.winner
        $scope.loser = data.loser
      } else {
        $scope.winner = {};
        $scope.loser = {};
      }
    }

    var battleRoute = function(){
      route.url('/')
    }

    rankingFactory.getResults(setResults);

    $scope.reset = function(){
      rankingFactory.resetResults(setResults, battleRoute);

    }



  }])
}

},{}],4:[function(require,module,exports){
module.exports = function(app){

  app.factory('rankingFactory', function($http){

    var factory = {};

    factory.rankings = [];
    factory.results = {};

    factory.getRankings = function(success){

      $http.get('/rankings').then(function(response){
        // console.log("RESPONSE FROM API IN GET NOTES:", response);
        factory.rankings = response.data
        if (typeof(success) == 'function'){
          success(factory.rankings);
        } else {
          throw "ERROR: callback must be a function!"
        }

      })

    }
    factory.playerLookup = function(userName, playerNum, success){
      $http.get("https://api.github.com/users/"+userName).then(function(response){
        var player = {name: response.data.login, img_path: response.data.avatar_url, score: (response.data.public_repos + response.data.followers)*12}
        success(player,playerNum);
      }).catch(function(err){
        success(null,playerNum)
      })




    }

    factory.createRanking = function(postData){

      $http.post('/rankings', postData).then(function(response){
        // console.log(response);
        if(response.data.result == 'failure'){
          console.log(response.data.errors);

        } else {
          console.log("Success!")
          console.log(response.data.ranking)
        }

      })

    }


    factory.battle = function(player1, player2, success){
      factory.createRanking(player1)
      factory.createRanking(player2)

      if (player1.score > player2.score){
        factory.results = {winner:player1, loser:player2}
      } else {
        factory.results = {winner:player2, loser:player1}
      }
      success()
    }

    factory.getResults = function(success){
      success(factory.results)
    }
    factory.resetResults = function(success, redirect=null){
      factory.results = {};
      success(factory.results)
      if (redirect){
        redirect();
      }

    }


    return factory;


  })




}

},{}],5:[function(require,module,exports){

var app = require('./modules/app.js')

var setupRankingFactory = require('./factories/ranking.js')
setupRankingFactory(app)

var setupBattleController = require('./controllers/battleController.js')
setupBattleController(app)

var setupResultsController = require('./controllers/resultsController.js')
setupResultsController(app)

var setupRankingsController = require('./controllers/rankingsController.js')
setupRankingsController(app)

},{"./controllers/battleController.js":1,"./controllers/rankingsController.js":2,"./controllers/resultsController.js":3,"./factories/ranking.js":4,"./modules/app.js":6}],6:[function(require,module,exports){

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

},{}]},{},[5]);
