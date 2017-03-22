function minToFront(array){
    var min = array[0];
    var minIndex = 0;
    for (var x = 0; x < array.length; x++){
        if (array[x] < min){
            min = array[x];
            minIndex = x;
        }
    }
    for (var y = minIndex; y > 0; y--){
        arr[y] = arr[y - 1];
    }
    arr[0] = min
    return arr;
}