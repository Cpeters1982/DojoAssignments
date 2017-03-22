function roll20SidedDie(){
    return Math.ceil(Math.random() * 19 + 1)
}
function rollUntilDoubles(){
    var previousRoll = 99;
    var foundDouble = false
    var count = 0
    var max = 0
    var min = 99
    var sum = 0
    while(foundDouble === false){
        var newValue = roll20SidedDie();
        count++;
        sum += newValue;
        if (newValue > max){
            max = newValue;
        }
        if (newValue < min){
            min = newValue;
        }
        if (newValue == previousRoll){
            foundDouble = true;
        } else {
            previousRoll = newValue;
        }
    }
    var average = sum / count;
    console.log("Number of rolls: " + count + ", Min: " + min + ", Max: " + max + ", Average: " + average)
}