function zip(arr1, arr2){
    var x = 0;
    var zippedArray = []
    while (x < arr1.length || x < arr2.length){
        if (arr1[x] != undefined){
            zippedArray[zippedArray.length] = arr1[x];
        }
        if (arr2[x] != undefined){
            zippedArray[zippedArray.length] = arr2[x];
        }
        x++;
    }
    return zippedArray;
}