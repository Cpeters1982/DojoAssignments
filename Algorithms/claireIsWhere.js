var claire = [0,0]

function reset(){
    claire = [0,0]
}
function moveBy(x,y){
    claire[0] = claire[0] + x;
    claire[1] = claire[1] + y;
}
function xLocation(){
    return claire[0];
}
function yLocation(){
    return claire[1];
}
function distFromHome(){
    return Math.pow(Math.pow(claire[0], 2) + Math.pow(claire[1], 2), 0.5);
}
