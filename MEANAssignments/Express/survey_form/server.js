var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, './static')));


app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');



app.get('/', function(req, res){
  res.render('index')
})

// app.get('/results', function(req, res){
//   res.render('results')
// })

app.post('/results', function(req, res){

  var context = req.body
  console.log(context)

  res.render('results', context)
})

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

var io = require('socket.io').listen(server)

io.sockets.on('connection', function(socket){
  console.log("WE ARE USING SOCKETS");
  console.log(socket.id);

  socket.on('posting_form', function(data){
    console.log('Form was submitted!');
    console.log(data)
    var message = "You emitted the following information to the server: " + JSON.stringify(data)
    socket.emit('updated_message', {message: message})
    socket.emit('random_number', {number: Math.floor(Math.random()*1000 + 1)})
  })
})
