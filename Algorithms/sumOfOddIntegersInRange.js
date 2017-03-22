function sumOfOddIntegersInRange(lowerBound, upperBound){
    if (lowerBound == -(upperBound)){
        console.log(0);
    } else {
        var sum = 0;
        for (var x = lowerBound; x <= upperBound; x++){
            if (x % 2 == 1 || x % 2 == -1){
                sum += x;
            }
        }
        console.log(sum);
    }
}
sumOfOddIntegersInRange(-300000, 300000)
