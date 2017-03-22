function generateCoinChange(cents){
    
    var pennies = cents % 5;
    var quarters = (cents - (pennies +((cents - pennies) % 25))) / 25;
    var nickels = ((cents - (pennies + quarters * 25)) % 10) / 5;
    var dimes = (cents - (nickels * 5 + pennies + quarters * 25)) / 10;

    console.log("Quarters: " + quarters)
    console.log("Dimes: " + dimes)
    console.log("Nickels: " + nickels)
    console.log("Pennies: " + pennies)
}

function secondGenerateCoinChange(cents){
    var dollarCoins = 0;
    while (cents > 100){
        dollarCoins++;
        cents -= 100;
    }
    var halfDollars = 0;
    while (cents > 50){
        halfDollars++;
        cents -= 50;
    }
    
    var pennies = cents % 5;
    var quarters = (cents - (pennies +((cents - pennies) % 25))) / 25;
    var nickels = ((cents - (pennies + quarters * 25)) % 10) / 5;
    var dimes = (cents - (nickels * 5 + pennies + quarters * 25)) / 10;
    
    console.log("Quarters: " + quarters)
    console.log("Dimes: " + dimes)
    console.log("Nickels: " + nickels)
    console.log("Pennies: " + pennies)
}

function thirdGenerateCoinChange(cents){
    //array will have format [["Coin Name:", value, numberOfCoins], ...]
    var coins = [["Dollar Coins: ", 100, 0], ["Half Dollar Coins: ", 50, 0], ["Quarters: ", 25, 0], ["Dimes: ", 10, 0], ["Nickels: ", 5, 0], ["Pennies: ", 1, 0]]
    for (var x = 0; x < coins.length; x++){
        while (cents > coins[x][1]){
            coins[x][2]++;
            cents -= coins[x][1];
        }
    }
    for (var x = 0; x < coins.length; x++){
        console.log(coins[x][0] + coins[x][2])
    }
}