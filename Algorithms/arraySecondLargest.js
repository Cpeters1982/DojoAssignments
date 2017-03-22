function secondLargest(arr){
    var max = arr[0];
    var second = null;
    if (arr.length < 2){
        return null;
    }
    for (var x = 1; x < arr.length; x++){
        if (arr[x] > max){
            second = max;
            max = arr[x];
            //console.log("Max: " + max);
            //console.log("Second: " + second);
        } else {
          if (arr[x] > second){
            second = arr[x];
            //console.log("Max: " + max);
            //console.log("Second: " + second);
          }
        }
    }
    return second;
}