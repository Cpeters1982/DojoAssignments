function replaceNegatives(arr){
    for (var x = 0; x < arr.length; x++){
        if (arr[x] < 0){
            arr[x] = "Dojo";
        }
    }
    return arr;
}