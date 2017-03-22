function extractDigit(num, digitNum){
    return Math.trunc(num / Math.pow(10, digitNum)) % 10
}

