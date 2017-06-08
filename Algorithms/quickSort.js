function quickSort(arr){
  if (arr.length === 1 || arr.length === 0){
    return arr
  }
  var less = [];
  var greater = [];

  for (var x = 1; x < arr.length; x += 1){
    if (arr[x] > arr[0]){
      greater.push(arr[x])
    } else {
      less.push(arr[x])
    }
  }
  return quickSort(less).concat([arr[0]]).concat(quickSort(greater))
}

var unsorted = [10, 7, 4, 3, 8, 1, 9, 2, 5, 6]

console.log(quickSort(unsorted))
