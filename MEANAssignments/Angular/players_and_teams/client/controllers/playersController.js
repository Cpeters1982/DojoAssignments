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
