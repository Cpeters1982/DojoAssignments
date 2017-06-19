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
