
var app = require('./modules/app.js')

var setupRankingFactory = require('./factories/ranking.js')
setupRankingFactory(app)

var setupBattleController = require('./controllers/battleController.js')
setupBattleController(app)

var setupResultsController = require('./controllers/resultsController.js')
setupResultsController(app)

var setupRankingsController = require('./controllers/rankingsController.js')
setupRankingsController(app)
