function removeAt(arr, index){
    var removed = arr[index];
    for (var x = index; x < arr.length - 1; x++){
        arr[x] = arr[x + 1];
    }
    arr.length--;
    return removed;
}
function filterRange(arr, min, max){
    for (var x = arr.length - 1; x >= 0; x--){
        if (arr[x] > min && arr[x] < max){
            removeAt(arr, x);
        }
    }
}