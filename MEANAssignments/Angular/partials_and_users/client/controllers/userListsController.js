module.exports = function(app){
  app.controller('userListsController', ['$scope', 'userFactory', function($scope, userFactory){

    $scope.users = [];

    userFactory.getUsers(function(data){
      $scope.users = data
    });


  }])
}
