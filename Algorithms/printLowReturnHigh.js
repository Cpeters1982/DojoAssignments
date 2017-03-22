function printLowReturnHigh(array){
    var high = -9999;
    var low = 9999;
    for (var x = 0; x < array.length; x++){
        if (array[x] > high){
            high = array[x];
        }
        if (array[x] < low){
            low = array[x];
        }
    }
    console.log(low);
    return high;
}