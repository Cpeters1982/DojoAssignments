function insertAt(arr, index, value){
    for (var x = arr.length - 1; x >= index; x--){
        arr[x+1] = arr[x];
    }
    arr[index] = value;
}