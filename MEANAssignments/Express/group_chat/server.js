var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var messages = [{name:"Nick D", text: "This is a hardcoded message"}]
var user_id_count = 0


app.get('/', function(req, res){
  res.render('index', {messages:messages})
})

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

var io = require('socket.io').listen(server)

io.sockets.on('connection', function(socket){
  console.log("WE ARE USING SOCKETS");
  console.log(socket.id);

  socket.on('new_user', function(data){
    console.log('A new user appeared!');
    console.log(data)
    socket.broadcast.emit("added_user", data)
    user_id_count += 1
    socket.emit("assigned_user_id", {user_id: user_id_count})
  })

  socket.on('new_message', function(data){
    console.log("New message received!");
    console.log(data);
    messages.push(data)
    io.emit('append_message', messages[messages.length -1])
  })





})
