function scale(arr, num){
    for (var x = 0; x < arr.length; x++){
        arr[x] = arr[x] * num;
    }
    return arr;
}