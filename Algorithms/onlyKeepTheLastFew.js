function onlyKeepTheLastFew(arr, num){
  arr.splice(0, arr.length - num);
  return arr
}