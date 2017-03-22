function swapTowardCenter(arr){
    for (x = 0; x < (arr.length / 2); x += 2){
        var temp = arr[x];
        arr[x] = arr[arr.length - (1 + x)];
        arr[arr.length - (1 + x)] = temp;
    }
    return arr;
}