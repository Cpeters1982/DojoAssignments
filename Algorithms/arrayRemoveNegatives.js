function removeAt(arr, index){
    var removed = arr[index];
    for (var x = index; x < arr.length - 1; x++){
        arr[x] = arr[x + 1];
    }
    arr.length--;
    return removed;
}
function removeNegatives(arr){
    for (var x = arr.length - 1; x >= 0; x--){
        if (arr[x] < 0){
            removeAt(arr, x);
        }
    }
    return arr;
}