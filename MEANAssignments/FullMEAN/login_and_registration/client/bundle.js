(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(app){
  app.controller('loginController', function($scope, userFactory, $location){

    $scope.errors = {};

    var redirect = function(dest){
      if (dest.redirect == "success"){
        $location.url('/success');
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

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
module.exports = function(app){

  app.factory('userFactory', function($http){

    var factory = {};

    factory.users = [];
    factory.currentUser = null;

    factory.logoutUser = function(redirect){
      factory.currentUser = null;
      redirect({redirect:"login"})
    }

    factory.loginUser = function(postData, redirect, errorHandler){
      $http.post('/users/login', postData).then(function(response){

        if (response.data.result == 'failure'){
          console.log(response.data.message);
          errorHandler(response.data.errors);
          redirect({redirect:"login"})
        } else {
          console.log(response.data.user)
          factory.currentUser = response.data.user
          redirect({redirect:'success'})
        }

      })
    }


    factory.createUser = function(postData, redirect, errorHandler){

      $http.post('/users', postData).then(function(response){
        // console.log(response);
        if(response.data.result == 'failure'){
          console.log(response.data.errors);
          errorHandler(response.data.errors)
          redirect({redirect:'register'})
        } else {
          console.log("Success!")
          console.log(response.data.user)
          factory.currentUser = response.data.user
          redirect({redirect:'success'})
        }


      })

    }

    // factory.deleteUser = function(id, success){
    //
    //   $http.post('/users/' + id + '/delete').then(function(response){
    //     // console.log(response);
    //     if(response.data.result == 'failure'){
    //       console.log(response.data.errors);
    //
    //     } else {
    //       console.log("Success!")
    //       console.log(response.data.user)
    //     }
    //     factory.getUsers(success);
    //
    //   })
    // }
    //
    // factory.updateUser = function(id, postData, success){
    //
    //   $http.post('/users/' + id, postData).then(function(response){
    //     // console.log(response);
    //     if(response.data.result == 'failure'){
    //       console.log(response.data.errors);
    //
    //     } else {
    //       console.log("Success!")
    //       console.log(response.data.user)
    //     }
    //     factory.getUsers(success);
    //
    //   })
    //
    // }
    //
    // factory.getUsers = function(success){
    //
    //   $http.get('/users').then(function(response){
    //
    //     factory.users = response.data
    //     if (typeof(success) == 'function'){
    //       success(factory.users);
    //     } else {
    //       throw "ERROR: callback must be a function!"
    //     }
    //
    //   })
    //
    // }



    return factory;


  })

}

},{}],5:[function(require,module,exports){

var app = require('./modules/app.js')

require('./factories/user.js')(app)

require('./controllers/login.js')(app)

require('./controllers/register.js')(app)

require('./controllers/success.js')(app)

},{"./controllers/login.js":1,"./controllers/register.js":2,"./controllers/success.js":3,"./factories/user.js":4,"./modules/app.js":6}],6:[function(require,module,exports){

var app = angular.module('loginAndRegistration', ['ngRoute'])

app.config(function($routeProvider){
  $routeProvider
  .when('/login',{
    templateUrl:'partials/login.html',
    controller:"loginController"
  })
  .when('/register',{
    templateUrl:'partials/register.html',
    controller:"registerController"
  })
  .when('/success',{
    templateUrl:'partials/success.html',
    controller:"successController"
  })
  .otherwise({
    redirectTo:'/login'
  });
});

module.exports = app

},{}]},{},[5]);
