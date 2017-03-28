$(document).ready(function(){

$("#add-class-button").click(function(){
    // console.log("clicked add class button");
    $("#addRedClass").addClass("red");
});
$("#remove-class-button").click(function(){
    // console.log("clicked add class button");
    $("#addRedClass").removeClass("red");
});

$("#slidetoggle-button").click(function(){
    $("#bear-shark").slideToggle();
});
$("#slidedown-button").click(function(){
    $("#bear-shark").slideDown();
});
$("#slideup-button").click(function(){
    $("#bear-shark").slideUp();
});

$("#append-button").click(function(){
    $("#appendTarget").append("<p>You just appended a new paragraph!</p>")
});
$("#prepend-button").click(function(){
    $("#prependTarget").prepend("<p>You just prepended a new paragraph!</p>")
});

$("#show-button").click(function(){
    $("#dinosaurs").show();
});
$("#hide-button").click(function(){
    $("#dinosaurs").hide();
});
$("#toggle-button").click(function(){
    $("#dinosaurs").toggle();
});
$("#fadein-button").click(function(){
    $("#horse-shark").fadeIn();
});
$("#fadeout-button").click(function(){
    $("#horse-shark").fadeOut();
});

$("#before-button").click(function(){
    $("#beforeAfterTarget").before('<img class="shark-teeth" src="https://nicolenguyen17.files.wordpress.com/2013/03/shark-teeth.jpg" alt="shark teeth">')
});
$("#after-button").click(function(){
    $("#beforeAfterTarget").after('<img class="shark-teeth" src="https://nicolenguyen17.files.wordpress.com/2013/03/shark-teeth.jpg" alt="shark teeth">')
});
$("#html-button").click(function(){
    $("#htmlTarget").html("<img src='http://i.imgur.com/2TDGmAm.jpg' alt='Batman VS Shark'>");
});
$("#attr-button").click(function(){
    $("img").attr("src", "https://i.ytimg.com/vi/2-1qUr3eO3A/maxresdefault.jpg")
});
$(".val-button").click(function(){
    var text = $(this).text();
    $("input").val(text);
});
$(".data-button").click(function(){

    var value;

    switch ( $(".data-button").index(this)){
        case 0 :
            value = $("#data-div").data("data");
            break;
        case 1:
            $("#data-div").data("data", "Fish");
            value = "Stored!";
            break;
        case 2:
            $("#data-div").data("data", "Cow");
            value = "Stored!";
            break;
        case 3:
            $("#data-div").removeData("data");
            value = "Removed!";
            break;
    }

    $("span").text("" + value);
});


});