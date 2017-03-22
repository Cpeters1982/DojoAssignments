function skylineHeights(arr){
    var minVisHeight = 0;
    var result = []
    for (var x = 0; x < arr.length; x++){
        if (arr[x] > minVisHeight){
            result[result.length] = arr[x];
            minVisHeight = arr[x]
        }
    }
    return result;
}