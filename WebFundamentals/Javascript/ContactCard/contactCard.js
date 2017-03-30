
//helper function to populate contact cards with headers upon generation
function generate_contact_card(div) {
        // console.log("called generate contact card");
        var htmlString = "<h1>" + div.attr("name-content") + "</h1><h5>Click for description!</h5>";
        // console.log(htmlString);
        // console.log(div);
        div.html(htmlString);
        div.attr("now-showing", "name");
}

$(document).ready(function () {

    $(document).on("click", "button", function(){
        // console.log("clicked button");
        $("form").submit()
    });


    $("form").on("submit", function(){
        // console.log("triggered submit");
        var dataArray = [];
        $("input").each(function(){
            dataArray.push($(this).val())
        });
        for (var x = 0; x < dataArray.length; x++){
            if (dataArray[x] == ""){
                console.log("Error: Both first and last name are required!")
                alert("Error: Both first and last name are required!")
                return false;
            }
        }
        // console.log("value of textarea: " + $("textarea").val())
        dataArray.push($("textarea").val());
        var htmlString = '<div class="contact-card" name-content="' + dataArray[0] + " " + dataArray[1] + '" description-content="' + dataArray[2] + '" now-showing="name"></div>';
        $("#card-area").append(htmlString);
        generate_contact_card($("#card-area div:last-child"));
        return false;
    });

    

    $(document).on("click",".contact-card", function(){

        if ($(this).attr("now-showing") == "name") {
            var htmlString = "<p>" + $(this).attr("description-content") + "</p>";
            $(this).html(htmlString);
            $(this).css("text-align","left")
            $(this).attr("now-showing", "description");
        } else {
            var htmlString = "<h1>" + $(this).attr("name-content") + "</h1><h5>Click for description!</h5>";
            $(this).html(htmlString);
            $(this).css("text-align","center")
            $(this).attr("now-showing", "name");
        }
    })

    
});