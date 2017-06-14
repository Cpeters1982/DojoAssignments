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
