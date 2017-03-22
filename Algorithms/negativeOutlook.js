function negativeOutlook(arr){
    newArr = [];
    for (var x = 0; x < arr.length; x++){
        if (arr[x] > 0){
            newArr.push(arr[x] * -1);
        } else {
            newArr.push(arr[x])
        }
    }
    return newArr;
}