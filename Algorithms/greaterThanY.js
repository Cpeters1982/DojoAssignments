function countGreaterThan(arr, y){
    var count;
    for (x = 0; x < arr.length; x++){
        if (arr[x] > y){
            count++;
        }
    }
    console.log(count);
}