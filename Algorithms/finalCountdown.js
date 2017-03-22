function finalCountdown(param1, param2, param3, param4){
    var x = param2
    while (x < param3){
        if (x != param4){
            if (x % param1 == 0){
                console.log(x);
            }
        }
        x++;
    }
}