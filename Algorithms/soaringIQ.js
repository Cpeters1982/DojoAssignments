function soaringIQ(IQ, increment, days){
    for (var x = 1; x <= days; x++){
        IQ += x * increment;
    }
    return IQ;
}
var result = soaringIQ(101,.01,98);
console.log(result);