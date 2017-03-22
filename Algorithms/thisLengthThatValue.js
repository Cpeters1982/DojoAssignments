function thisLengthThatValue(num1, num2){
    if (num1 == num2){
        console.log("Jinx!");
    }
    var array = [];
    for (var x = 0; x < num1; x++){
        array.push(num2);
    }
    return array;
}