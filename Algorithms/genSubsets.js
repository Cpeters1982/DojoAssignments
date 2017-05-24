function genSubsets(str, curr=''){
  var result = []
  result.push(curr)
  if (str.length === 0){
    return result
  }
  for (var x = 0; x < str.length; x += 1){
    new_curr = curr + str[x]
    new_str = str.slice(x+1)
    // console.log("new curr: ", new_curr, " new str: ", new_str)
    result = result.concat(genSubsets(new_str, new_curr))
  }
  return result
}

var string = "abc"

console.log(genSubsets(string))
