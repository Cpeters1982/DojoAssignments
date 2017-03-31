$(document).ready(function(){

    var houses = {Stark:{number:"362", imgUrl:"stark.svg"},
                    Targaryen: { number: "378", imgUrl: "targaryen.svg"},
                    Lannister: { number: "229", imgUrl: "lannister.svg"},
                    Arryn: { number: "7", imgUrl: "arryn.svg"},
                    Baratheon: { number: "17", imgUrl: "baratheon.svg"},
                    Bolton: { number: "34", imgUrl: "bolton.png"},
                    Greyjoy: { number: "169", imgUrl: "greyjoy.png"},
                    Hightower: { number: "195", imgUrl:"hightower.png"},
                    Hornwood: { number: "202", imgUrl: "hornwood.png"},
                    Tarly: { number: "379", imgUrl: "tarly.png"},
                    Tully: { number: "395", imgUrl: "tully.svg"},
                    Tyrell: { number: "398", imgUrl: "tyrell.svg"},
                    Mallister: { number: "254", imgUrl: "mallister.png"}
                }
    // console.log("houses.Stark result: ");
    // console.log(houses.Stark)
    // console.log("houses.Stark.number result: ");
    // console.log(houses.Stark.number)


    for (var house in houses){
        console.log(house)
        $("#house-row").append("<div class='house' name='" + house + "' id='" + house + "' number='" + houses[house].number + "' img-url='" + houses[house].imgUrl + "'></div>")
    }
    $(".house").each(function(){


        var imgString = "<img src='" + $(this).attr("img-url") + "' alt='" + $(this).attr("name") + "'>"
        $(this).append(imgString);


    })
    $("#house-row").wrapInner("<table cellspacing='10'><tr>");
    $(".house").wrap("<td></td>");

    $(document).on("click", ".house", function(){

        console.log("clicked house: " + $(this).attr("number"));

        $.get("http://www.anapioficeandfire.com/api/houses/" + $(this).attr("number"), function(res){
            console.log(res);

            var htmlString = ""

            htmlString += "<h1 style='text-align:center'>" + res.name + "</h1>";

            htmlString += "<h2>Coat of Arms: " + res.coatOfArms + "</h2>";

            htmlString += "<h2>Region: " + res.region + "</h2>"

            htmlString += "<h2>Words: " + res.words + "</h2>";

            htmlString += "<h2>Titles: " + res.titles + "</h2>";


            $("#info-container").html(htmlString);
        })
    });
    
});