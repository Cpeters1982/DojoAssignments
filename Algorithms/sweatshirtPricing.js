function sweatshirtPricing(num){
    var discount = 0;
    if (num == 2){
        discount = .09;
    }
    if (num == 3){
        discount = .19;
    }
    if (num >= 4){
        discount = .35;
    }
    var cost = Math.ceil(20 * num * (1 - discount));
    return cost;
}