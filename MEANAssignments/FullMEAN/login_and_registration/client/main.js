
var app = require('./modules/app.js')

require('./factories/user.js')(app)

require('./controllers/login.js')(app)

require('./controllers/register.js')(app)

require('./controllers/success.js')(app)
