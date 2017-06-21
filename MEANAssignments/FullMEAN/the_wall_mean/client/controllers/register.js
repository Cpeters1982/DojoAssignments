module.exports = function(app){
  app.controller('registerController', function($scope, userFactory, $location, $cookies){

    $scope.errors = {};

    var redirect = function(dest, user=null){
      if (dest.redirect == "success"){
        if (user){
          $cookies.put('currentUser', user._id)
        } else {
          console.log("Didn't receive user from factory in register controller")
        }
        $location.url('/home');
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
      // console.log($scope.newUser)
      console.log($scope.password_confirmation, $scope.newUser.password)
      if($scope.password_confirmation == $scope.newUser.password){
        console.log("Passwords match, calling factory.createUser")
        userFactory.createUser($scope.newUser, redirect, errorCatcher);
        $scope.errors = {};
      } else {
        $scope.errors.passwordConfirm = true;
        $scope.password_confirmation = "";
      };
    };


  })
}
