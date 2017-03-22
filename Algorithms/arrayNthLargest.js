function insertAt(arr, index, value){
    for (var x = arr.length - 1; x >= index; x--){
        arr[x+1] = arr[x];
    }
    arr[index] = value;
}
function nthLargest(arr, n){
    if (arr.length < n){
        return null;
    }
    var seenSoFar = [arr[0]];
    console.log(seenSoFar)
    for (var x = 1; x < arr.length; x++){
      //console.log("Entered outer loop");
        for (var y = 0; y <= seenSoFar.length - 1; y++){
          //console.log("entered inner loop");
            if (arr[x] < seenSoFar[y]){
                insertAt(seenSoFar, y, arr[x]);
                //console.log(seenSoFar);
                break;
            } else {
              //console.log("didn't find lower value")
            }
        }
    }
    return seenSoFar[seenSoFar.length - n];
}