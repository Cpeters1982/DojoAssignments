$(document).ready(function(){

    $("button").hover(
        function(){
            $("#wrapper").css("background-image", $(this).attr("img-src"));
        });

    
    $("button").click(function(){

        $("#select-arena").css("display","none");
        $("#select-player").css("display","block");
    });

    $("select").on("change",function(){
        
        $( "#left option:selected" ).each(function() {
            var htmlString = '<img src="' + $(this).attr("img-src") + '" alt="whatever">';
            $("#left-box").html(htmlString);
        });

        $( "#right option:selected" ).each(function() {
            var htmlString = '<img src="' + $(this).attr("img-src") + '" alt="whatever">';
            $("#right-box").html(htmlString);

        });


  });
  




});