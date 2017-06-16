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
      route.url('#!/')
    }

    rankingFactory.getResults(setResults);

    $scope.reset = function(){
      rankingFactory.resetResults(setResults, battleRoute);


    }



  }])
}
