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
