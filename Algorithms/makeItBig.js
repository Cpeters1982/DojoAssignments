function makeItBig(array){
    for (var x = 0; x < array.length; x++){
        if (array[x] < 0){
            array[x] = "big";
        }
    }
    return array
}