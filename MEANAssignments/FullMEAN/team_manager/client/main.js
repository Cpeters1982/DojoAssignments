
var app = require('./modules/app.js')

var setupPlayerFactory = require('./factories/player.js')
setupPlayerFactory(app)

var setupStatusesController = require('./controllers/statusesController.js')
setupStatusesController(app)

var setupPlayersController = require('./controllers/playersController.js')
setupPlayersController(app)
