function removeAt(arr, index){
    var removed = arr[index];
    for (var x = index; x < arr.length - 1; x++){
        arr[x] = arr[x + 1];
    }
    arr.pop();
    return removed;
}
function removeDuplicates(arr){
    for(var x = 0; x < arr.length - 1; x++){
        while (arr[x] == arr[x + 1]){
            removeAt(arr, x + 1);
        }
    }
}

function removeDuplicatesWithoutNestedLoops(arr){
    for (var x = arr.length - 1; x >= 0; x--){
        if (arr[x - 1] == arr[x]){
          removeAt(arr, x);
        }
    }
}