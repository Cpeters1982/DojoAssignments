
//initialize app
var app = require('./modules/app.js')

//set up factories
require('./factories/user.js')(app)

require('./factories/message.js')(app)

//set up controllers
require('./controllers/login.js')(app)

require('./controllers/register.js')(app)

require('./controllers/wall.js')(app)
