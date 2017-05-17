function longestSubstringMatch(str1, str2){
  var longest = ""
  for (var i = 0; i < str1.length; i+=1){
    // console.log("i = ", i)
    for (var j = 0; j < str2.length; j+=1){
      // console.log("j = ", j)
      if (str1[i] == str2[j]){
        // console.log("Found same chars: ", str1[i], str2[j])
        for (var k = 1; k + i <= str1.length && k + j <= str2.length; k+= 1){
          // console.log("k = ", k)
          // console.log("Comparing: ", str1[i+k], str2[j+k])
          if ((str1[i+k] != str2[j+k])||i+k == str1.length || j+k == str2.length){
            var slice = str1.slice(i,i+k);
            // console.log("Slice: ", slice)
            if (slice.length > longest.length){
              longest = slice;
              // console.log("Set longest to: ", longest)
            }
            break;
          }
        }
      }
    }
  }
  return longest
}

console.log(longestSubstringMatch("barkiest", "cartiest"))
