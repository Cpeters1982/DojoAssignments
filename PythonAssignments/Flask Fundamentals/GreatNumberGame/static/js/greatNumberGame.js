$(document).ready(function(){

   if ($('#result-phrase').text() == "You got it right!"){
     console.log("triggered correct guess phrase")
     $("#result-box").css("background-color", "green")
     $('#number-reveal').show()
     $("#reset-button").show()

   } else {
    //  console.log($('#result-phrase').text())
     $("#result-box").css("background-color", "red")
     $("#reset-button").hide()

   }

});
