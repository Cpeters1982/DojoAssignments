function getAverage(arr){
    var sum = 0;
    for (x = 0; x < arr.length; x++){
        sum += arr[x];
    }
    var average = sum / arr.length;
    console.log(average);
}