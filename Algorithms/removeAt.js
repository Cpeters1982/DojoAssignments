function removeAt(arr, index){
    var removed = arr[index];
    for (var x = index; x < arr.length - 1; x++){
        arr[x] = arr[x + 1];
    }
    arr.pop();
    return removed;
}