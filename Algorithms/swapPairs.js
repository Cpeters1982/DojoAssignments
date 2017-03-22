function swapPairs(arr){
    for (var x = 0; x + 1 < arr.length; x += 2){
        var temp = arr[x];
        arr[x] = arr[x+1];
        arr[x+1] = temp;
    }
    return arr;
}