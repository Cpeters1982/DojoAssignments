function splitAndSum(num){
    var numString = num.toString();
    var sum = 0
    for (var x = 0; x < numString.length; x++){
        sum += Number(numString.charAt(x));
    }
    
    return sum;
}
function sumToOne(num){
    
    while (num > 9){
        num = splitAndSum(num);
    }
    return num
}