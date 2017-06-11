
$(document).ready(function (){
  var socket = io.connect();


  $('#button-form').submit(function(e){
    e.preventDefault();
    console.log("You pushed the epic button!")
    socket.emit("button_press", {reset:false})
  })

  $('#reset-form').submit(function(e){
    e.preventDefault();
    console.log("You clicked the reset button!")
    socket.emit("button_press", {reset:true})
  })

  socket.on('update_count', function(data){
    console.log('the updated count is: '+ data.count)
    $('#count-span').html(data.count)
  })

})
