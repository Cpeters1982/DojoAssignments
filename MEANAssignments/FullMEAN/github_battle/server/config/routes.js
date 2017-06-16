//import controllers
var rankings = require('./../controllers/rankings')


module.exports = function(app){

  app.get('/rankings', rankings.all)
  app.post('/rankings', rankings.create)


}
