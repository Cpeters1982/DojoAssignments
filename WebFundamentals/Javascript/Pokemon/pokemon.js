$(document).ready(function(){

    var htmlString = "";

    for(var num = 1; num <= 718; num++){

        htmlString += '<img src="http://pokeapi.co/media/img/' + num + '.png">'
    
    }

    $("#wrapper").append(htmlString);




});