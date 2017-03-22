function findMax(arr){
    var max = arr[0];
    for (x = 1; x < arr.length; x++){
        if (arr[x] > max){
            max = arr[x];
        }
    }
    console.log(max);
}