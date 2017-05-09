function arraySum(arr){

  if (arr.length < 1){
    return 0
  } else if (arr[0].constructor === Array){
    return arraySum(arr[0]) + arraySum(arr.slice(1))
  } else {
    return arr[0] + arraySum(arr.slice(1))
  }
}

array = [1,2,[2, [1, 2], 3],4]
// console.log(array2[2].constructor)

test = arraySum(array)
console.log(test)
