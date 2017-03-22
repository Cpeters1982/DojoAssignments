function multiplesOfThree(){
    for (var x = 3; x >= -300; x--){
        if (x % 3 == 0){
            if (x == -3 || x == -6){
                continue
            }
            console.log(x)
        }
    }
}