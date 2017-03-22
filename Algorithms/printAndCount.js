function printAndCount(){
    var count = 0;
    for (x = 512; x <= 4096; x++){
        if (x % 5 == 0){
            console.log(x)
            count++
        }
    }
    console.log(count)
}