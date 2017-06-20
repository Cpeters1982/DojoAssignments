//import controllers
var users = require('./../controllers/users.js')


module.exports = function(app){

  app.get('/users', users.all)
  // app.post('/users/:user_id/delete', users.delete)
  // app.post('/users/:user_id', users.update)
  app.post('/users/login', users.login)
  app.post('/users', users.create)




}
