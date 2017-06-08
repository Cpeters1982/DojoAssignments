var qs = require('querystring')

$(document).ready(function (){
  // this triggers the connection event in our server!
  var socket = io.connect();
  // we'll write all the socket stuff after the above line!


  $('#survey-form').submit(function(e){
    e.preventDefault();
    var postData = qs.parse($('#survey-form').serialize())
    socket.emit("form_submit", postData)
  })

  socket.on('server_response', function(data){
    console.log('the server says: '+ data.response)
  })
})
