//import controllers
var messages = require('./../controllers/messages')
var users = require('./../controllers/users')


module.exports = function(app){

  app.get('/messages', messages.index)
  app.post('/messages', messages.create)
  // app.post('/messages/:message_id/comments/:comment_id/delete', messages.deleteComment)
  // app.post('/messages/:message_id/delete', messages.deleteMessage)
  app.post('/messages/:message_id', messages.comment)

  app.post('/users/login', users.login)
  app.post('/users', users.create)

}
