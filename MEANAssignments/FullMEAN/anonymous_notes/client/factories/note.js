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
