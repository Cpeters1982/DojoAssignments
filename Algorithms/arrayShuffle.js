function shuffle(arr){
    for(var x = 0; x < arr.length; x++){
        var newIndex = Math.trunc(Math.random() * arr.length);
        var temp = arr[x];
        arr[x] = arr[newIndex];
        arr[newIndex] = temp;
    }
    return arr;
}