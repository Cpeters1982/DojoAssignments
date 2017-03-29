$(document).ready(function(){

    $("button").click(function(){
        // console.log("clicked button");
        $("form").submit()
    });
    $("form").on("submit", function(){
        // console.log("triggered submit");
        var htmlString = "<tr>";

        $("input").each(function(){
            htmlString += "<td>" + $(this).val() + "</td>"
            // console.log(htmlString);
        });
        $("tbody").append(htmlString);

        return false;
    });
});