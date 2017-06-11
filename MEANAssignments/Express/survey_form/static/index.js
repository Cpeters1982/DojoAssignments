// var qs = require('querystring')

$(document).ready(function (){
  // this triggers the connection event in our server!
  var socket = io.connect();
  // we'll write all the socket stuff after the above line!


  $('#survey-form').submit(function(e){
    e.preventDefault();

    var serialized = $('#survey-form').serializeArray();
    var formData = {};
    $.each(serialized,
    function(i, v) {
        formData[v.name] = v.value;
    });
    // var postData = JSON.stringify( $('#survey-form').serializeArray() );
    socket.emit("posting_form", formData)
    $('#response-wrapper').html("")
  })

  socket.on('updated_message', function(data){
    console.log('the server says: '+ data.message)
    $('#response-wrapper').prepend("<p>" + data.message + "</p>")
  })

  socket.on('random_number', function(data){
    console.log('the random number is: ', data.number)
    $('#response-wrapper').append("<p>Your lucky number emitted by the server is: " + String(data.number) + "</p>")
  })

})
