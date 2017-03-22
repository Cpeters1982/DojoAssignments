function shiftValues(arr){
    for (var x = 0; x < arr.length - 1; x++){
        arr[x] = arr[x+1];
        arr[x+1] = 0
    }
    return arr;
}