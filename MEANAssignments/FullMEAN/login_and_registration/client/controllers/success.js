module.exports = function(app){
  app.controller('successController', function($scope, userFactory, $routeParams, $location){

    $scope.currentUser = userFactory.currentUser

    var redirect = function(dest){
      $location.url('/login')
    }

    if (!$scope.currentUser){
      redirect();
    }

    $scope.logout = function(){
      userFactory.logoutUser(redirect)
    }

  })
}
