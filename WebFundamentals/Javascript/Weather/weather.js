function kelvinToFahrenheit(temp){
    
    return temp * 9/5 - 459.67
}

$(document).ready(function(){

    $("form").submit(function(){

        if ($("#city-field").val() == ""){
            return false;
        }
        
        var city = $("#city-field").val()


        $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=29e32e43034954950f78b2fb9df3b53c", function(res){

        console.log(res);
        var htmlString = "<h1>" + res.name + "</h1><h3>Temperature: " + Math.trunc(kelvinToFahrenheit(res.main.temp)) + "</h3>"
        $("#result").html(htmlString);

        }, "json")

        return false;
    })

    







});