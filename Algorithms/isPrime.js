function isPrime(num){
    for (var x = 2; x < num; x++){
        if (num % x == 0){
            return false;
        }
    }
    return true;
}