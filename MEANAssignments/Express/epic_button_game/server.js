var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var count = 0

app.get('/', function(req, res){
  res.render('index', {clicks:count})
})

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

var io = require('socket.io').listen(server)

io.sockets.on('connection', function(socket){
  console.log("WE ARE USING SOCKETS");
  console.log(socket.id);

  socket.on('button_press', function(data){
    console.log('A button was pressed!');
    console.log(data)
    if (data.reset == true){
      count = 0
      io.emit('update_count', {count: count})
    } else {
      count += 1
      io.emit('update_count', {count: count})
    }

  })
})
