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
