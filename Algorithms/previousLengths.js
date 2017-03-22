function previousLengths(array){
    //there is no previous index of the 0 index, so I guess I'll just not replace that one
    for (x = array.length -1; x > 0; x--) {
        
        array[x] = array[x-1].length;
    }
}