var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
require('./models')
var controller = require('./controller')


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.get('/', controller.index)
app.get('/beef/new', controller.new)
app.get('/beef/edit/:id', controller.edit)
app.get('/beef/:id', controller.show)
app.get('/beef', controller.index)
app.post('/beef/destroy/:id', controller.destroy)
app.post('/beef/:id', controller.update)
app.post('/beef', controller.create)




app.listen(8000, function() {
 console.log("listening on port 8000");
});
