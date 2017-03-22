function significantDigit(num){
    var negative = false;
    if (num < 0){
        num = num * -1;
        negative = true;
    }
    while(num > 10 || num < 1){
        if (num > 10){
            num = num / 10;
        } else {
            num = num * 10;
        }
    }
    if (negative == false){
        return Math.trunc(num);
    } else {
        return -(Math.trunc(num));
    }
    

}

