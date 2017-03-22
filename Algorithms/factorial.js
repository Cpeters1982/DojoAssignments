function factorial(num){
    var product = 1;
    for (var x = 1; x <= num; x++){
        product = product * x;
    }
    return product;
}