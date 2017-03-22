function alwaysHungry(arr){
    var foundFood = false;
    for (var x = 0; x < arr.length; x++){
        if (arr[x] == "food"){
            console.log("yummy");
            foundFood = true;
        }
    }
    if (foundFood == false){
        console.log("I'm hungry")
    }
}