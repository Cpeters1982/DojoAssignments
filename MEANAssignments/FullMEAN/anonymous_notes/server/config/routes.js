//import controllers
var notes = require('./../controllers/notes')


module.exports = function(app){

  app.get('/notes', notes.index)
  app.post('/notes', notes.create)


}
