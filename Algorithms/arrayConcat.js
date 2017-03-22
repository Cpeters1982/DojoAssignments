function concat(arr1, arr2){
    var result = [];
    for (var x = 0; x < arr1.length; x++){
        result[result.length] = arr1[x];
    }
    for (var y = 0; y < arr2.length; y++){
        result[result.length] = arr2[y];
    }
    return result;
}