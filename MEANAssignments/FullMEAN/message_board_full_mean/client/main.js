
var app = require('./modules/app.js')

var setupMessageFactory = require('./factories/message.js')
setupMessageFactory(app)

var setupMessagesController = require('./controllers/MessagesController.js')
setupMessagesController(app)
