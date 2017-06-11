var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
require('./models') // prep db
var controller = require('./controller')

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');



app.get('/', controller.index)
app.post('/quotes', controller.newQuote)
app.get('/quotes', controller.quotes)

app.listen(8000, function() {
 console.log("listening on port 8000");
});
