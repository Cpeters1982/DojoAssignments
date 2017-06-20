module.exports = function(app){
  app.controller('registerController', function($scope, userFactory, $location){

    $scope.errors = {};

    var redirect = function(dest){
      if (dest.redirect == "success"){
        $location.url('/success');
      } else if (dest.redirect == "login"){
        $location.url('/login');
      } else {
        $location.url('/register');
      }
    };

    var errorCatcher = function(errors){
      console.log("Caught registration errors:", errors)
      if (errors.code && errors.code == 11000){
        console.log(errors.code)
        $scope.errors.emailTaken = true;
      } else {
        $scope.errors.emailTaken = null;
        // console.log("Email isn't taken...")
        if (errors.errors){
          if (errors.errors.email){
            $scope.errors.email = errors.errors.email.message
          }
          if (errors.errors.first_name){
            $scope.errors.first_name = errors.errors.first_name.message
          }
          if (errors.errors.last_name){
            $scope.errors.last_name = errors.errors.last_name.message
          }
          if (errors.errors.password){
            $scope.errors.password = errors.errors.password.message
          }
          if (errors.errors.birthday){
            $scope.errors.birthday = errors.errors.birthday.message
          }
        }
      }
    }

    if (userFactory.currentUser){
      redirect({redirect:'success'});
    }

    $scope.logout = function(){
      userFactory.logoutUser(redirect);
    };

    $scope.registerUser = function(){
      if($scope.password_confirmation === $scope.newUser.password){
        userFactory.createUser($scope.newUser, redirect, errorCatcher);
        $scope.errors = {};
      } else {
        $scope.errors.passwordConfirm = true;
        $scope.password_confirmation = "";
      };
    };


  })
}
