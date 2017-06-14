
var app = require('./modules/app.js')


var setupPlayerFactory = require('./factories/playerFactory.js')
setupPlayerFactory(app)

var setupTeamFactory = require('./factories/teamFactory.js')
setupTeamFactory(app)


var setupPlayersController = require('./controllers/playersController.js')
setupPlayersController(app)

var setupTeamsController = require('./controllers/teamsController.js')
setupTeamsController(app)

var setupAssociationsController = require('./controllers/associationsController.js')
setupAssociationsController(app)
