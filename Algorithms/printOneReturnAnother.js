function printOneReturnAnother(array){
    if (array.length >= 2){
        console.log(array[-2])
    } else {
        console.log("There is no second to last value!")
    }
    var foundOdd = false;
    for (var x = 0; x < array.length; x++){
        if (array[x] % 2 == 1){
            foundOdd = array[x]
            return foundOdd
        }
    }
    if (foundOdd == false){
        console.log("There are no odd values")
        return false;
    }
}