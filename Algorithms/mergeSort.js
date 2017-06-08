function sortedMerge(arr1, arr2, merged=[]){
  while(arr1.length > 0 || arr2.length > 0){

    if(!arr2[0] || arr1[0] < arr2[0]){
      merged.push(arr1.shift())
    } else if(!arr1[0] || arr2[0] < arr1[0]){
      merged.push(arr2.shift())
    }

  }

  return merged
}

// var second = [6,7]

// var first = [4,5]

// console.log(sortedMerge(first,second, [1, 2, 3]))

function mergeSort(arr){
  if (arr.length == 1){
    return arr
  }
  var first = arr.slice(0,arr.length/2)
  var second = arr.slice(arr.length/2)

  return sortedMerge(mergeSort(first), mergeSort(second))

}


var test = [10,9,8,7,6,5,4,3,2,1]

console.log(mergeSort(test))
