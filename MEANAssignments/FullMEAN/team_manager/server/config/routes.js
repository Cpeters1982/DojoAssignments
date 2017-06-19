//import controllers
var players = require('./../controllers/players.js')


module.exports = function(app){

  app.get('/players', players.all)
  app.post('/players/:player_id/delete', players.delete)
  app.post('/players/:player_id', players.update)
  app.post('/players', players.create)



}
