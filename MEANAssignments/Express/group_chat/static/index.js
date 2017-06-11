$(document).ready(function (){

  var name = prompt("What is your name?")
  var socket = io.connect();
  socket.emit('new_user', {name:name})

  var user_id

  socket.on('assigned_user_id', function(data){
    console.log("Got user ID from server: ", data.user_id)
    user_id = data.user_id
  })


  $('#new-message-form').submit(function(e){
    e.preventDefault();
    console.log("You sent a message!")
    socket.emit("new_message", {name:name, user_id:user_id, text:$('#new-message').val()})
    $('#new-message').val("")
  })
  //
  // $('#reset-form').submit(function(e){
  //   e.preventDefault();
  //   console.log("You clicked the reset button!")
  //   socket.emit("button_press", {reset:true})
  // })
  //
  socket.on('append_message', function(data){
    console.log('appending new message to the board: '+ JSON.stringify(data))
    var htmlString = '<tr><td class="message-name-cell">' + data.name + '</td><td class="message-text-cell">' + data.text + '</td></tr>'
    $('#message-table-body').append(htmlString)
  })

})
