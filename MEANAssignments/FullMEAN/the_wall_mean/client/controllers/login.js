module.exports = function(app){
  app.controller('loginController', function($scope, userFactory, $location, $cookies){
    $scope.login = true
    $scope.errors = {};

    var redirect = function(dest, user=null){
      if (dest.redirect == "success"){
        if (user){
          $cookies.put('currentUser', user._id)
        } else {
          console.log("Didn't receive user from factory in login controller")
        }
        $location.url('/home');
      } else {
        $location.url('/login');
      }
    }

    var errorCatcher = function(errors){
      console.log("Caught errors:", errors)

      if (errors.errors){
        if (errors.errors.email){
          $scope.errors.email = errors.errors.email.message
        }

        if (errors.errors.password){
          $scope.errors.password = errors.errors.password.message
        }

      }

    }

    if(userFactory.currentUser){
      redirect({redirect:'success'});
    }

    $scope.loginUser = function(){
      $scope.errors = {};
      userFactory.loginUser($scope.loginData, redirect, errorCatcher);
    }

  })
}
