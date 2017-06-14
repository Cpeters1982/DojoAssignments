module.exports = function(app){
  app.factory('playerFactory', function(){

    var factory = {}

    var players = [
      {name:"Nick", team:null},
      {name:"Ted", team:null},
      {name:"Armando", team:null},
    ]

    factory.getPlayers = function(callback){
      //refresh players from database here
      callback(players);
    }

    factory.createPlayer = function(newPlayer, callback){
      //add player to database here and then call get players again
      players.push(newPlayer);
      factory.getPlayers(callback);
    }
    factory.deletePlayer = function(index, callback){
      //remove player from database here and then call get players again
      players.splice(index, 1);
      factory.getPlayers(callback);
    }

    factory.assignPlayerToTeam = function(index, team, callback){
      players[index].team = team;
      factory.getPlayers(callback);
    }

    factory.clearAssignment = function(index, callback){
      players[index].team = null;
      factory.getPlayers(callback)
    }


    return factory


  })

}
