module.exports = function(app){

  app.factory('rankingFactory', function($http){

    var factory = {};

    factory.rankings = [];
    factory.results = {};

    factory.getRankings = function(success){

      $http.get('/rankings').then(function(response){
        // console.log("RESPONSE FROM API IN GET NOTES:", response);
        factory.rankings = response.data
        if (typeof(success) == 'function'){
          success(factory.rankings);
        } else {
          throw "ERROR: callback must be a function!"
        }

      })

    }
    factory.playerLookup = function(userName, playerNum, success){
      $http.get("https://api.github.com/users/"+userName).then(function(response){
        var player = {name: response.data.login, img_path: response.data.avatar_url, score: (response.data.public_repos + response.data.followers)*12}
        success(player,playerNum);
      }).catch(function(err){
        success(null,playerNum)
      })




    }

    factory.createRanking = function(postData){

      $http.post('/rankings', postData).then(function(response){
        // console.log(response);
        if(response.data.result == 'failure'){
          console.log(response.data.errors);

        } else {
          console.log("Success!")
          console.log(response.data.ranking)
        }

      })

    }


    factory.battle = function(player1, player2, success){
      factory.createRanking(player1)
      factory.createRanking(player2)

      if (player1.score > player2.score){
        factory.results = {winner:player1, loser:player2}
      } else {
        factory.results = {winner:player2, loser:player1}
      }
      success()
    }

    factory.getResults = function(success){
      success(factory.results)
    }
    factory.resetResults = function(success, redirect=null){
      factory.results = {};
      success(factory.results)
      if (redirect){
        redirect();
      }

    }


    return factory;


  })




}
