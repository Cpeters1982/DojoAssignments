var beef = require('./../controllers/beefController')


module.exports = function(app){

  app.get('/', beef.index)
  app.get('/beef/new', beef.new)
  app.get('/beef/edit/:id', beef.edit)
  app.get('/beef/:id', beef.show)
  app.get('/beef', beef.index)
  app.post('/beef/destroy/:id', beef.destroy)
  app.post('/beef/:id', beef.update)
  app.post('/beef', beef.create)

}
