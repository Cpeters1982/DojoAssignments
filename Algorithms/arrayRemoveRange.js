function removeRange(arr,start,end){
    var numberOfRemovedElements = end - start + 1;
    for (var x = 0; x <= end - start; x++){
        arr[start + x] = arr[end + 1 + x];
    }
    arr.length -= numberOfRemovedElements;
    return arr;
}