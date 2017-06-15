(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(app){
  app.controller('MessagesController', ['$scope', 'messageFactory', function($scope, messageFactory){

    $scope.messages = [];

    var setMessages = function(data){
      // console.log("DATA FROM SET MESSAGES:", data)
      $scope.messages = data;
      $scope.newMessage = {};
    }

    messageFactory.getMessages(setMessages);


    $scope.addMessage = function(){
      messageFactory.createMessage($scope.newMessage, setMessages);
    }

    $scope.addComment = function(messageID, comment){
      // console.log("COMMENT", comment);
      // console.log("USING WATCHIFY!!!")
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

},{}],2:[function(require,module,exports){
module.exports = function(app){

  app.factory('messageFactory', function($http){

    var factory = {};

    factory.messages = [];

    factory.getMessages = function(success){

      $http.get('/messages').then(function(response){
        // console.log("RESPONSE FROM API IN GET MESSAGES:", response);
        factory.messages = response.data
        if (typeof(success) == 'function'){
          success(factory.messages);
        } else {
          throw "ERROR: callback must be a function!"
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

},{}],3:[function(require,module,exports){

var app = require('./modules/app.js')

var setupMessageFactory = require('./factories/message.js')
setupMessageFactory(app)

var setupMessagesController = require('./controllers/MessagesController.js')
setupMessagesController(app)

},{"./controllers/MessagesController.js":1,"./factories/message.js":2,"./modules/app.js":4}],4:[function(require,module,exports){

var app = angular.module('messageBoard', ['ngRoute'])

app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'partials/message_board.html'
  })
  .otherwise({
    redirectTo:'/'
  });
});

module.exports = app

},{}]},{},[3]);
