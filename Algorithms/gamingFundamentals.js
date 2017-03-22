function rollOne(){
    return Math.ceil(Math.random() * 5 + 1)
}
function playFives(num){
    for (var x = 1; x <= 5; x++){
        var value = rollOne();
        console.log(value);
        if (value == 5){
            console.log("That's good luck!");
        }
    }
}
function playStatistics(){
    var lowest = 99;
    var highest = 0;
    for (var x = 1; x <= 8; x++){
        var value = rollOne();
        if (value > highest){
            highest = value;
        }
        if (value < lowest){
            lowest = value;
        }
    }
    console.log("Lowest value: " + lowest);
    console.log("Highest value: " + highest);
}
function playStatistics2(){
    var lowest = 99;
    var highest = 0;
    var sum = 0
    for (var x = 1; x <= 8; x++){
        var value = rollOne();
        sum += value;
        if (value > highest){
            highest = value;
        }
        if (value < lowest){
            lowest = value;
        }
    }
    console.log("Lowest value: " + lowest);
    console.log("Highest value: " + highest);
    console.log("Total sum: " + sum);
}
function playStatistics3(num){
    var lowest = 99;
    var highest = 0;
    var sum = 0
    for (var x = 1; x <= num; x++){
        var value = rollOne();
        sum += value;
        if (value > highest){
            highest = value;
        }
        if (value < lowest){
            lowest = value;
        }
    }
    console.log("Lowest value: " + lowest);
    console.log("Highest value: " + highest);
    console.log("Total sum: " + sum);
}
function playStatistics4(num){
    var lowest = 99;
    var highest = 0;
    var sum = 0
    for (var x = 1; x <= num; x++){
        var value = rollOne();
        sum += value;
        if (value > highest){
            highest = value;
        }
        if (value < lowest){
            lowest = value;
        }
    }
    console.log("Lowest value: " + lowest);
    console.log("Highest value: " + highest);
    console.log("Average value: " + sum / num);
}
