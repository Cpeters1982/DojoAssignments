function pushFront(arr, value){
    for (var x = arr.length - 1; x >= 0; x--){
        arr[x+1] = arr[x];
    }
    arr[0] = value;
}