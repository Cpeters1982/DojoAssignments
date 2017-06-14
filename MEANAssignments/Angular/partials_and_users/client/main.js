
var app = require('./modules/app.js')

var setupUserFactory = require('./factories/userFactory.js')
setupUserFactory(app)

var setupCustomizeUsersController = require('./controllers/customizeUsersController.js')
setupCustomizeUsersController(app)

var setupUserListsController = require('./controllers/userListsController.js')
setupUserListsController(app)
