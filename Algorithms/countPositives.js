function countPositives(array){
    var count = 0;
    for (x = 0; x < array.length; x++){
        if (array[x] > 0){
            count++;
        }
    }
    array[-1] = count;
    return array;
}