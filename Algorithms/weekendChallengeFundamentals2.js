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

function mathMemorizationGame(){
    var questions = ["First Question: What are the first 10 digits of pi?", "Second Question: What are the first ten digits of e?", "Third Question: What are the first ten digits of the square root of 2?"]
    var answers = []
    var numberOfDigits = 10
    answers.push(Math.floor(Math.PI * Math.pow(10, numberOfDigits)) / Math.pow(10, numberOfDigits));
    answers.push(Math.floor(Math.E * Math.pow(10, numberOfDigits)) / Math.pow(10, numberOfDigits));
    answers.push(Math.floor(Math.pow(2, 0.5) * Math.pow(10, numberOfDigits)) / Math.pow(10, numberOfDigits));

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

mathMemorizationGame();