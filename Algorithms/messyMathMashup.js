function messyMath(num){
    var sum = 0;
    for (var x = 0; x <= num; x++){
        if (x == num/3){
            return -1
        }
        if (x % 3 == 0){
            continue;
        } else {
            if (x % 7 == 0){
                sum += (x * 2);
            } else {
                sum += x;
            }
        }
    }
  return sum;
}