function binaryCombos(str){
  var placeholder = "_";
  var result = [];
  if (!str.includes(placeholder)){
    result.push(str);
    return result;
  }
  for(var x = 0; x < str.length; x += 1){
    if (str[x] == placeholder){
      result = result.concat(binaryCombos(str.slice(0,x) + "0" + str.slice(x+1)));
      result = result.concat(binaryCombos(str.slice(0,x) + "1" + str.slice(x+1)));
      break;
    }
  }
  return result;
}

var string = "010_1_";

console.log(binaryCombos(string));


//A super cool arrow function version Instructor David showed me:

const binaryStringExpansion3 = (str) => (
  (str.indexOf('_') === -1) ?
    [str] :
    binaryStringExpansion3(str.replace('_', '0'))
      .concat(
    binaryStringExpansion3(str.replace('_', '1'))
  )
);
