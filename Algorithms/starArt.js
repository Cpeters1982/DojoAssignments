function drawLeftStars(num){
    var text = "";
    for (var x = 1; x <= 75; x++){
        if (x <= num){
            text += "*";
        } else {
            text += " ";
        }
    }
}
function drawRightStars(num){
    var text = "";
    for (var x = 1; x <= 75; x++){
        if (x <= 75 - num){
            text += " ";
        } else {
            text += "*";
        }
        
    }
}
function drawCenterStars(num){
    var sidesLength = (75 - num)/2;
    var text = "";
    for (var x = 1; x <= 75; x++){
        if (x > sidesLength && x < 75 - sidesLength){
            text += "*";
        } else {
            text += " ";
        }
    }
    if (text.length < 75){
        text += " ";
    }
    return text;
}