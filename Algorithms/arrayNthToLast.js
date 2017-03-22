function nthToLast(arr, n){
    if (arr.length < n){
        return null;
    } else {
        return arr[arr.length - n];
    }
}