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
