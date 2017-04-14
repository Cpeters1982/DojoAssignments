//the built in function should actually be written like input.split(separator, limit=null)

function split(input, separator, limit=null){
  var result = [];
  var indicies = [0];
  if (separator === ""){
    // console.log("separator is empty string")
    for (var y = 0; y < input.length; y+=1){
      result.push(str[y]);
    }
    conosle.log(result)
    return result;
  }
  // console.log("separator is non-empty")
  for (var x = 0; x < input.length; x += 1){
    if (input.substring(x, x + separator.length) == separator){
      indicies.push(x - 1);
      // console.log("pushing index")
      // console.log(x - 1)
      // console.log(indicies)
      // console.log("pushing result")
      // console.log(input.substring(indicies[indicies.length-2], indicies[indicies.length-1] + 1))
      result.push(input.substring(indicies[indicies.length-2], indicies[indicies.length-1] + 1));
      // console.log("pushing next start index")
      // console.log(x + separator.length)
      indicies.push(x + separator.length);
      // console.log(indicies)

      if (limit){
        // console.log("limit is defined")
        if (result.length == limit - 1){
          result.push(input.substring(indicies[indicies.length-1], input.length))
          return result
        }
      }
      x += (separator.length - 1)
    }
  }
  if (input[indicies[indicies.length-1]]){
    result.push(input.substring(indicies[indicies.length-1], input.length))
  }
  return result
}

var s = "abc, def, g"
console.log(s)


console.log("splitting without limit")
var test1 = split(s, ", ")
console.log(test1)

console.log("splitting with limit of 2")
var test2 = split(s, ", ", 2)
console.log(test2)
