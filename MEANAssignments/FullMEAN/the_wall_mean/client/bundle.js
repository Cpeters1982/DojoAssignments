(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
module.exports = function(app){
  app.controller('wallController', ['$scope', 'messageFactory', 'userFactory', '$location', function($scope, messageFactory, userFactory, $location){

    $scope.messages = [];

    var redirect = function(dest){
      if (dest.redirect == "login"){
        $location.url('/login');
      } else {
        $location.url('/home');
      }
    }

    if(!userFactory.currentUser){
      redirect({redirect:'login'});
    } else {
      $scope.currentUser = userFactory.currentUser
    }



    var setMessages = function(data){
      // console.log("DATA FROM SET MESSAGES:", data)
      $scope.messages = data;
      $scope.newMessage = {};
    }

    messageFactory.getMessages(setMessages);


    $scope.logout = function(){
      userFactory.logoutUser(redirect);
    };


    $scope.addMessage = function(userID){
      $scope.newMessage.user_id = userID
      console.log($scope.newMessage)
      messageFactory.createMessage($scope.newMessage, setMessages);
    }

    $scope.addComment = function(userID, messageID, comment){
      // console.log("COMMENT", comment);
      // console.log("USING WATCHIFY!!!")
      comment.user_id = userID
      messageFactory.createComment(messageID, comment, setMessages);
    }

    $scope.deleteMessage = function(messageID){
      console.log("Called deleteMessage in controller on message ID: ", messageID)
      messageFactory.deleteMessage(messageID, setMessages);
    }

    $scope.deleteComment = function(messageID, commentID){
      console.log("Called deleteComment in controller on commentID: ", commentID, "... Within message ID: ", messageID);
      messageFactory.deleteComment(messageID, commentID, setMessages);
    }

  }])
}

},{}],4:[function(require,module,exports){
module.exports = function(app){

  app.factory('messageFactory', function($http){

    var factory = {};

    factory.messages = [];

    factory.getMessages = function(success){

      $http.get('/messages').then(function(response){
        // console.log("RESPONSE FROM API IN GET MESSAGES:", response);
        if (response.data.errors){
          console.log(response.data.errors);
        } else {
          console.log("recieved messages in factory")
          factory.messages = response.data.messages
          if (typeof(success) == 'function'){
            success(factory.messages);
          } else {
            throw "ERROR: callback must be a function!"
          }
        }


      })

    }

    factory.createMessage = function(postData, success){

      $http.post('/messages', postData).then(function(response){
        // console.log(response);
        if(response.data.result == 'failure'){
          console.log(response.data.message);
          console.log(response.data.errors);

        } else {
          console.log("Success!")
          console.log(response.data.message)
        }
        factory.getMessages(success)
      })

    }

    factory.createComment = function(messageID, postData, success){

      $http.post('/messages/' + messageID, postData).then(function(response){
        // console.log("Response:", response);
        if(response.data.result == 'failure'){
          console.log(response.data.message);
          console.log(response.data.errors);

        } else {
          console.log("Success!")
          console.log(response.data.message)
        }
        factory.getMessages(success)
      })

    }

    factory.deleteMessage = function(messageID, success){
      $http.post('/messages/' + messageID + '/delete').then(function(response){
        if(response.data.result == 'failure'){
          console.log(response.data.message);
          console.log(response.data.errors);

        } else {
          console.log("Success!")
          console.log(response.data.message)
        }
        factory.getMessages(success)
      })
    }

    factory.deleteComment = function(messageID, commentID, success){

      $http.post('/messages/' + messageID + '/comments/' + commentID + '/delete').then(function(response){
        if(response.data.result == 'failure'){
          console.log(response.data.message);
          console.log(response.data.errors);

        } else {
          console.log("Success!")
          console.log(response.data.message)
        }
        factory.getMessages(success)
      })



    }




    return factory;


  })




}

},{}],5:[function(require,module,exports){
module.exports = function(app){

  app.factory('userFactory', function($http, $cookies){

    var factory = {};

    factory.users = [];
    factory.currentUser = $cookies.get('currentUser');


    factory.logoutUser = function(redirect){
      factory.currentUser = null;
      $cookies.remove('currentUser')
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
          $cookies.put('currentUser', response.data.user._id)
          factory.currentUser = $cookies.get('currentUser');
          redirect({redirect:'success'}, factory.currentUser)
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
          redirect({redirect:'success'}, factory.currentUser)
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

},{}],6:[function(require,module,exports){

//initialize app
var app = require('./modules/app.js')

//set up factories
require('./factories/user.js')(app)

require('./factories/message.js')(app)

//set up controllers
require('./controllers/login.js')(app)

require('./controllers/register.js')(app)

require('./controllers/wall.js')(app)

},{"./controllers/login.js":1,"./controllers/register.js":2,"./controllers/wall.js":3,"./factories/message.js":4,"./factories/user.js":5,"./modules/app.js":7}],7:[function(require,module,exports){

var app = angular.module('theWall', ['ngRoute', 'ngCookies'])

app.config(function($routeProvider){
  $routeProvider
  .when('/login',{
    templateUrl:'partials/login.html',
    controller:'loginController'
  })
  .when('/register',{
    templateUrl:'partials/register.html',
    controller:'registerController'
  })
  .when('/home',{
    templateUrl:'partials/wall.html',
    controller:'wallController'
  })
  .otherwise({
    redirectTo:'/login'
  });
});

module.exports = app

},{}]},{},[6]);
