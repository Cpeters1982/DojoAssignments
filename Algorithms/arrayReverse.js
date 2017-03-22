function reverse(arr){
    for(var x = 0; x < arr.length/2; x++){
        var temp = arr[x];
        arr[x] = arr[arr.length - (1 + x)];
        arr[arr.length - (1 + x)] = temp;
    }
    return arr;
}