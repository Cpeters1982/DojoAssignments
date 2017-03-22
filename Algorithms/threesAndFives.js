function threesFives(){
    var sum = 0;
    for (var x = 100; x <= 4000000; x++){
        //add to sum if the value is divisible by 3 or 5 but not both
        if ((x % 3 == 0 || x % 5 == 0) && !(x % 3 == 0 && x % 5 == 0)){
            sum += x;
        } 
    }
    console.log(sum)
}

function betterThreesFives(start, end){
    var sum = 0;
    for (var x = start; x <= end; x++){
        //add to sum if the value is divisible by 3 or 5 but not both
        if ((x % 3 == 0 || x % 5 == 0) && !(x % 3 == 0 && x % 5 == 0)){
            sum += x;
        } 
    }
    console.log(sum)
}
