function valuesGreaterThanSecond(array){
    if (array.length < 2){
        console.log("There is no second value!");
        return false;
    }
    var count = 0
    for(var x = 0; x < array.length; x++){
        if (array[x] > array[1]){
            console.log(array[x]);
            count++;

        }
    }
    return count;
}