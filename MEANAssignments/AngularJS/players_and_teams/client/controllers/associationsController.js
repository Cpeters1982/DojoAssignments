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
