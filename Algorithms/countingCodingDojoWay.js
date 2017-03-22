function countingTheCodingDojoWay(){
    for (var x = 1; x <= 100; x ++){
        if (x % 5 == 0){
            console.log("Coding")
            if (x % 10 == 0){
                console.log(" Dojo")
            }
        } else {
            console.log(x)
        }
    }
}