module.exports = function(app){
  app.controller('customizeUsersController', ['$scope', '$location', 'userFactory', function($scope, $location, userFactory){

    $scope.users = [];

    var setUsers = function(data){
      $scope.users = data;
      $scope.newUser = {};
    }

    userFactory.getUsers(setUsers);


    $scope.addUser = function(){
      userFactory.createUser($scope.newUser, setUsers);
      $location.url('/list');
    }

    $scope.removeUser = function(index){
      userFactory.deleteUser(index, setUsers);
    }

  }])
}
