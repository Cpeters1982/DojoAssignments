function filterNegatives(arr){
  if (arr.length < 1){
    return []
  } else if (arr[0] < 0){
    return filterNegatives(arr.slice(1))
  } else {
    return [arr[0]].concat(filterNegatives(arr.slice(1)))
  }
}

array = [1,2,3,-4,5,-6,7,8, -9]

test = filterNegatives(array)

console.log(test)
