$(document).ready(function(){

   if ($('#result-phrase').text() == "You got it right! Alright sucker, you buy the coffee!"){
     console.log("triggered correct guess phrase")
     $("#result-box").css("background-color", "green")
    //  $('#number-reveal').show()
     $("#reset-button").show()

   } else {
    //  console.log($('#result-phrase').text())
     $("#result-box").css("background-color", "red")
     $("#reset-button").hide()

   }

});
