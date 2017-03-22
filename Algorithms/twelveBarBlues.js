function twelveBarBlues(){
    var bar = [0,"chick","boom","chick"];
    for (var x = 1; x <= 12; x++){
        for (var y = 0; y < bar.length; y++){
            if (y == 0){
                console.log(bar[y] + x);
            } else {
                console.log(bar[y]);
            }
        }
    }
}
twelveBarBlues();