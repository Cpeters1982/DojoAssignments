function maxMinAverage(arr){
    var max = -9999
    var min = 9999
    var sum = 0
    for (x = 0; x < arr.length; x++){
        if (arr[x] > max){
            max = arr[x];
        }
        if (arr[x] < min){
            min = arr[x];
        }
        sum += arr[x]
    }
    console.log(max);
    console.log(min);
    console.log(sum / arr.length);
}