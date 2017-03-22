function popFront(arr){
    var removed = arr[0];
    for (var x = 0; x < arr.length - 1; x++){
        arr[x] = arr[x + 1];
    }
    arr.pop();
    return removed;
}