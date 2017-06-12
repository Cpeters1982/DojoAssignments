//import controllers
var names = require('./../controllers/names')


module.exports = function(app){

  app.get('/', names.all)
  app.get('/new/:name/', names.create)
  app.get('/remove/:name/', names.destroy)
  app.get('/:name', names.show)

}
