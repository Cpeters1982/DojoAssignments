function insertAt(arr, index, value){
    for (var x = arr.length - 1; x >= index; x--){
        arr[x+1] = arr[x];
    }
    arr[index] = value;
}
function sumOfTenElements(arr, startPos){
    var sum = 0
    for (var x = 0; x < 10; x++){
        sum += arr[startPos + x];
        if (startPos + x == arr.length - 1){
            return [sum, arr.length];
        }
    }
    return [sum, startPos + 10];
}

function intermediateSums(arr){
    for (var x = 0; x < arr.length; x += 11){
        var result = sumOfTenElements(arr, x)
        insertAt(arr, result[1], result[0]);
    }
}