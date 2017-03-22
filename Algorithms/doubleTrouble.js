function insertAt(arr, index, value){
    for (var x = arr.length - 1; x >= index; x--){
        arr[x+1] = arr[x];
    }
    arr[index] = value;
}
function doubleTrouble(arr){
    for(var x = 0; x < arr.length; x += 2){
        insertAt(arr, x + 1, arr[x]);
    }
    return arr;
}