function evensAndOdds(array){
    var oddCount = 0;
    var evenCount = 0;
    for (x = 0; x < array.length; x++){
        if (array[x] % 2 == 1){
            evenCount = 0;
            oddCount++;
            if (oddCount >= 3){
                console.log("That's odd!");
            }
        } else {
            evenCount++;
            oddCount = 0;
            if (evenCount >= 3){
                console.log("Even more so!")
            }
        }
    }
}