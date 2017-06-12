//initalize express app
var express = require('express');
var app = express();

//set up body parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());


//run schema to prep database
require('./server/config/schema')

//configure routes
var router = require('./server/config/routes')
router(app)

//activate server on localhost port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
