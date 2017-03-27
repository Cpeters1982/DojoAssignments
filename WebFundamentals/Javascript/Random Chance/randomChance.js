function randomChance(quarters){

    while (quarters > 0){
        if (quarters == 0){
            return 0;
        }
        var randomNumber = Math.floor(Math.random()*100 + 1)
        console.log(randomNumber);
        if (randomNumber == 1){
            //We have a winner!
            winnings = Math.floor(Math.random()* 51) + 50;
            console.log("winnings: " + winnings)
            quarters += winnings;
            quarters--;
            break;
        }
        quarters--;
    }

    return quarters;
}

function randomChanceWithMinumumToLeave(quarters, minimum){

    while (quarters > 0){
        if (quarters == 0){
            return 0;
        }
        var randomNumber = Math.floor(Math.random()*100 + 1)
        console.log(randomNumber);
        if (randomNumber == 1){
            //We have a winner!
            winnings = Math.floor(Math.random()* 51) + 50;
            console.log("winnings: " + winnings)
            quarters += winnings;
            quarters--;
            if (quarters >= minimum){
                break;
            } else {
                console.log("won, but didn't make minimum yet");
            }
        }
        quarters--;
    }

    return quarters;
}