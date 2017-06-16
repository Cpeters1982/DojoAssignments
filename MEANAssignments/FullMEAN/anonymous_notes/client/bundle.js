(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(app){
  app.controller('NotesController', ['$scope', 'noteFactory', function($scope, noteFactory){

    $scope.notes = [];

    var setNotes = function(data){
      // console.log("DATA FROM SET NOTES:", data)
      $scope.notes = data;
      $scope.newNote = {};
    }

    noteFactory.getNotes(setNotes);


    $scope.addNote = function(){
      noteFactory.createNote($scope.newNote, setNotes);
    }


  }])
}

},{}],2:[function(require,module,exports){
module.exports = function(app){

  app.factory('noteFactory', function($http){

    var factory = {};

    factory.notes = [];

    factory.getNotes = function(success){

      $http.get('/notes').then(function(response){
        // console.log("RESPONSE FROM API IN GET NOTES:", response);
        factory.notes = response.data
        if (typeof(success) == 'function'){
          success(factory.notes);
        } else {
          throw "ERROR: callback must be a function!"
        }

      })

    }

    factory.createNote = function(postData, success){

      $http.post('/notes', postData).then(function(response){
        // console.log(response);
        if(response.data.result == 'failure'){
          console.log(response.data.note);
          console.log(response.data.errors);

        } else {
          console.log("Success!")
          console.log(response.data.note)
        }
        factory.getNotes(success)
      })

    }






    return factory;


  })




}

},{}],3:[function(require,module,exports){

var app = require('./modules/app.js')

var setupNoteFactory = require('./factories/note.js')
setupNoteFactory(app)

var setupNotesController = require('./controllers/NotesController.js')
setupNotesController(app)

},{"./controllers/NotesController.js":1,"./factories/note.js":2,"./modules/app.js":4}],4:[function(require,module,exports){

var app = angular.module('anonymousNotes', ['ngRoute'])

app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'partials/anonymous_notes.html'
  })
  .otherwise({
    redirectTo:'/'
  });
});

module.exports = app

},{}]},{},[3]);
