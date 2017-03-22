function getInput(name, question, answer){
    console.log("Okay " + name + ", " + question);
    response = prompt("Okay " + name + ", " + question);
    if (response == "Q" || response == "cancel"){
        return response;
    } else {
        if (response == answer){
            return true;
        } else {
            return false;
        }
    }
}

function fillInTheBlankGame(){
    var questions = ["First Question: What's 2+2?", "Second Question: What color is the sky? (on a good day, of course)", "Third Question: What is the meaning of life?"]
    var answers = ["4", "blue", "42"]
    var numAnswered = 0;
    var numCorrect = 0;
    var userName = prompt("What's your name?");
    console.log("Nice to meet you, " + userName);
    console.log("Let's get this party started!");
  
    for (var x = 0; x < questions.length; x++){
        var result = getInput(userName, questions[x], answers[x]);
        ///*
        if (result == "Q" || result == "cancel") {
            console.log("Quitting game");
            break;
        }
        //*/
        numAnswered++;
        if (result === true){
            numCorrect++;
        }
    }
    console.log("Game over!");
    console.log("User name: " + userName);
    console.log("Number of questions answered: " + numAnswered);
    console.log("Number correct: " + numCorrect);
}

fillInTheBlankGame();