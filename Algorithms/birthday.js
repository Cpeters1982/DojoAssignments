function birthdayCheck(num1, num2){
    
    var numsArray = [2,7];

    if ((numsArray[0] == num1 && numsArray[1] == num2) || (numsArray[0] == num2 && numsArray[1] == num1)){
        console.log("How did you know?");
    } else {
        console.log("Just another day...");
    }
}