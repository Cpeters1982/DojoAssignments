
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

$(document).ready(function () {

    var htmlString = "";

    for (var num = 1; num <= 718; num++) {

        htmlString += '<img class="pokemon" pokemon="' + num + '" src="http://pokeapi.co/media/img/' + num + '.png">'

    }

    $("#pokemon-section").append(htmlString);


    $(".pokemon").on("click", function () {
        console.log("clicked: " + $(this).attr("pokemon"));

        $.get("http://pokeapi.co/api/v2/pokemon/" + $(this).attr("pokemon") + "/", function (res) {
            // console.log(res);

            var htmlString = "<h3>Pokemon # " + res.id + "</h3>"

            htmlString += "<h1>Name: " + capitalizeFirstLetter(res.name) + "</h1>"

            htmlString += '<img class="pokedex-img" pokemon="' + res.id + '" src="http://pokeapi.co/media/img/' + res.id + '.png">'

            htmlString += "<h4>Types:</h4><ul>";

            for (var x = 0; x < res.types.length; x++) {
                htmlString += "<li>" + res.types[x].type.name + "</li>";
            }

            htmlString += "</ul>"
            htmlString += "<h4>Height:</h4><p>" + res.height + "</p>"
            htmlString += "<h4>Weight:</h4><p>" + res.weight + "</p><h4>Evolution Chain:</h4>"


            $("#pokedex-content").html(htmlString);
        });

        $.get("http://pokeapi.co/api/v2/pokemon-species/" + $(this).attr("pokemon") + "/", function (res) {
            // var htmlString = "<h4>Evolution Chain:</h4>"
            console.log("pokemon species reosurce:")
            console.log(res);
            console.log("evolution chain url:")
            console.log(res.evolution_chain.url)


            $.get(res.evolution_chain.url, function (chain) {
                // console.log(res3)
                // console.log(res3.chain.species.name)
                // console.log(res3.chain.evolves_to[0].species.name)
                // console.log(res3.chain.evolves_to[0].evolves_to[0].species.name)
                console.log(chain);

                console.log("Starting path check loop")
                var path = chain.chain
                var idArray = [];

                for (var evolution = 0; evolution <= 3; evolution++) {
                    console.log(path.species.name)
                    console.log(path.species.url)
                    var urlSlice = path.species.url.slice(41);
                    var number = urlSlice.slice(0, -1);
                    idArray.push(number)
                    console.log(idArray)
                    if (path.evolves_to.length > 0) {
                        if (path.evolves_to.length > 1) {
                            for (var i = 0; i < path.evolves_to.length; i++) {
                                var url = path.evolves_to[i].species.url;
                                var firstSlice = url.slice(41);
                                var secondSlice = firstSlice.slice(0, -1);
                                idArray.push(secondSlice)
                                // console.log("found abnormal evolution branch");
                            }

                        }
                        path = path.evolves_to[0];
                        
                        
                    } else {
                        console.log("ID ARRAY = " + idArray);
                        break;

                    }
                }
                
                
                var uniqueIDs = [];
                $.each(idArray, function (i, el) {
                    if ($.inArray(el, uniqueIDs) === -1) uniqueIDs.push(el);
                });
                console.log(uniqueIDs);
                var evolution_images = ""
                for (var id in uniqueIDs) {
                    evolution_images += '<img class="evolution-img" src="http://pokeapi.co/media/img/' + uniqueIDs[id] + '.png">'
                }
                $("#pokedex-content").append(evolution_images);



            }, "json");





        }, "json")





    })



});