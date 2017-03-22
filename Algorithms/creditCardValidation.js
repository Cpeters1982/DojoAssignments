function isCreditCardValid(digitArr){
    var lastDigit = digitArr[digitArr.length - 1];
    var count = 1;
    var sum = 0;
    for (var x = digitArr.length - 2; x >= 0; x--){
        if (count % 2 == 1){
            var doubleDigit = digitArr[x] * 2;
            if (doubleDigit > 9){
                doubleDigit -= 9;
            }
            sum += doubleDigit;
        } else {
            sum += digitArr[x];
        }
      count++;
    }
    sum += lastDigit;
    if (sum % 10 === 0){
        return true;
    } else {
        return false;
    }
}