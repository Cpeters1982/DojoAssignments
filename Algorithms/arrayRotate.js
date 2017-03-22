function removeAt(arr, index){
    var removed = arr[index];
    for (var x = index; x < arr.length - 1; x++){
        arr[x] = arr[x + 1];
    }
    arr.pop();
    return removed;
}
function shiftOneRight(arr){
    for (var x = arr.length - 1; x >= 0; x--){
        arr[x + 1] = arr[x];
    }
    arr[0] = arr[arr.length-1]
    removeAt(arr, arr.length-1)
}
function shiftOneLeft(arr){
    var movedElement = arr[0];
    for (var x = 0; x < arr.length - 1; x++){
        arr[x] = arr[x + 1]
    }
    arr[arr.length - 1] = movedElement
}
function rotate(arr, shiftBy){
  
  
    if (shiftBy > 0){
        for (var x = 1; x <= (shiftBy % arr.length); x++){
            shiftOneRight(arr);
        }
    } else {
        for (var x = 1; x <= -(shiftBy % arr.length); x++){
            shiftOneLeft(arr);
        }
    }
    
}