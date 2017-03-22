
//Ran out of time for this one, but here's what I got so far
//(it's sunday night now, gotta get up for the first day tomorrow)

var boardFormat = [["","",""],["","",""],["","",""]]

function ticTacToeChecker(arr){
    var nonEmptyCount = 0;
    var xLocations = [];
    var oLocations = [];
    for(var y = 0; y < arr.length; y++){
        for(var x = 0; x < arr[y].length; x++){
            if (arr[y][x] != ""){
                nonEmptyCount++;
                if (arr[y][x] == "X"){
                    xLocations.push([y,x]);
                }
                if (arr[y][x] == "O"){
                    oLocations.push([y,x])
                }

            }
        }
    }
    if (xLocations.length >= 3){
        //need to implement checks to see if locations are in a row or not
        //return "Player 1 wins!"; (also might need to add check to see which, X or O, is player 1 or 2)
    }
    if (yLocations.length >= 3){
        //need the same thing here for player 2's win condition
        //return "Player 2 wins!";
    }

    if (nonEmptyCount == arr.length * arr.length){
        return "It's a tie!";
    }

    if (nonEmptyCount % 2 === 0){
        return "Player 1's turn";
    } else {
        return "Player 2's turn";
    }

}