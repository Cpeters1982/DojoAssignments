module.exports = function(app){
  app.factory('teamFactory', function(){

    var factory = {}

    var teams = [
      {name:"Seahawks"},
      {name:"49ers"},
      {name:"Honeybadgers"},
    ]

    factory.getTeams = function(callback){
      //refresh teams from database here
      callback(teams);
    }

    factory.createTeam = function(newTeam, callback){
      //add team to database here and then call get teams again
      teams.push(newTeam);
      factory.getTeams(callback);
    }
    factory.deleteTeam = function(index, callback){
      //remove team from database here and then call get teams again
      teams.splice(index, 1);
      factory.getTeams(callback);
    }

    return factory


  })

}
