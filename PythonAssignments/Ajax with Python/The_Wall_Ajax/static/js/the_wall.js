$(document).ready(function(){
  console.log("Document is ready");

  $.get('/render_partial', function(res){
    // console.log(res);
    $('#wall-dynamic-content').append(res);
  })

  $("#add-message-form").submit(function(){

    url = $(this).attr('action');
    console.log(url);
    $.post(url, $(this).serialize());
    $.get('/render_partial', function(res){
      $('#wall-dynamic-content').html(res);
    })
    $("#new-message-textarea").val("")

    return false;

  })

  $(document).on("submit", ".add-comment-form", function(){
    console.log("Clicked submit on a comment form");
    url = $(this).attr('action');
    console.log(url);
    $.post(url, $(this).serialize());
    $.get('/render_partial', function(res){
      $('#wall-dynamic-content').html(res);
    })

    return false;
  })
  $(document).on("submit", ".delete-message-form", function(){
    console.log("Clicked delete on a delete message form");

    var confirmation = confirm("Are you sure?");
    if (confirmation == false){
      return false;
    }

    url = $(this).attr('action');
    console.log(url);
    $.post(url);
    $.get('/render_partial', function(res){
      $('#wall-dynamic-content').html(res);
    })
    return false;
  })

  $(document).on("click", "a.delete-comment-link", function(event){

    console.log("Clicked a delete comment link");
    var confirmation = confirm("Are you sure?");
    if (confirmation == false){
      return false;
    }
    url = $(this).attr("path")
    console.log(url);
    $.post(url);
    $.get('/render_partial', function(res){
      $('#wall-dynamic-content').html(res);
    });
    event.preventDefault();
  });

});
