module.exports = function(app){

  app.factory('playerFactory', function($http){

    var factory = {};

    factory.players = [];

    factory.getPlayers = function(success){

      $http.get('/players').then(function(response){
        // console.log("RESPONSE FROM API IN GET NOTES:", response);
        factory.players = response.data
        if (typeof(success) == 'function'){
          success(factory.players);
        } else {
          throw "ERROR: callback must be a function!"
        }

      })

    }


    factory.createPlayer = function(postData, success){

      $http.post('/players', postData).then(function(response){
        // console.log(response);
        if(response.data.result == 'failure'){
          console.log(response.data.errors);

        } else {
          console.log("Success!")
          console.log(response.data.player)
        }
        factory.getPlayers(success);

      })

    }

    factory.deletePlayer = function(id, success){

      $http.post('/players/' + id + '/delete').then(function(response){
        // console.log(response);
        if(response.data.result == 'failure'){
          console.log(response.data.errors);

        } else {
          console.log("Success!")
          console.log(response.data.player)
        }
        factory.getPlayers(success);

      })
    }

    factory.updatePlayer = function(id, postData, success){

      $http.post('/players/' + id, postData).then(function(response){
        // console.log(response);
        if(response.data.result == 'failure'){
          console.log(response.data.errors);

        } else {
          console.log("Success!")
          console.log(response.data.player)
        }
        factory.getPlayers(success);

      })

    }




    return factory;


  })




}
