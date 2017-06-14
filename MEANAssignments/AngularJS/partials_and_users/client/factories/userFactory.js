module.exports = function(app){
  app.factory('userFactory', function(){

    var factory = {}

    var users = [
      {firstName:"Nick", lastName:"deLannoy", language:"Swift"},
      {firstName:"Ted", lastName:"Mitka", language:"Python"},
      {firstName:"Armando", lastName:"Amador", language:"Ruby"},
    ]

    factory.getUsers = function(callback){
      //refresh users from database here
      callback(users);
    }

    factory.createUser = function(newUser, callback){
      //add user to database here and then call get users again
      users.push(newUser);
      factory.getUsers(callback);
    }
    factory.deleteUser = function(index, callback){
      //remove user from database here and then call get users again
      users.splice(index, 1);
      factory.getUsers(callback);
    }

    return factory


  })

}
