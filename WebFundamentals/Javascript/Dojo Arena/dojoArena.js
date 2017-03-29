$(document).ready(function(){

    $("button").hover(
        function(){
            $("#wrapper").css("background-image", $(this).attr("img-src"));
        }
        // function(){
        //     $("#wrapper").css("background-image", "");
    // }
    );

    // $("button").click(function(){

    //     $("#select-options").html('<h1>Select Players</h1><select id="left"><option>Select Player</option><option value="Donatello" img-src="donny.png">Donatello</option><option value="Leonardo">Leonardo</option><option value="Raphaelo">Raphaelo</option><option value="Michaelangelo">Michaelangelo</option></select><select id="right"><option>Select Player</option><option value="Donatello">Donatello</option><option value="Leonardo">Leonardo</option><option value="Raphaelo">Raphaelo</option><option value="Michaelangelo">Michaelangelo</option></select>')


    // });

    // $(".target").change(function () {
    //     alert("Handler for .change() called.");
    // });
    $("button").click(function(){

        $("#select-arena").css("display","none");
        $("#select-player").css("display","block");
    });

    $("select").on("change",function(){
        
        // console.log("changed selection");

        $( "#left option:selected" ).each(function() {
            // console.log("selected left option");
            var htmlString = '<img src="' + $(this).attr("img-src") + '" alt="whatever">';
            $("#left-box").html(htmlString);
        });

        $( "#right option:selected" ).each(function() {
            var htmlString = '<img src="' + $(this).attr("img-src") + '" alt="whatever">';
            $("#right-box").html(htmlString);

        });


  });
  


    $("#left option").change(function(){

        


    });

    $("#right option").click()



});