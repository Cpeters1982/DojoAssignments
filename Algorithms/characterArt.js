function drawLeftChars(num, char){
    var text = "";
    for (var x = 1; x <= 75; x++){
        if (x <= num){
            text += char;
        } else {
            text += " ";
        }
    }
}
function drawRightChars(num, char){
    var text = "";
    for (var x = 1; x <= 75; x++){
        if (x <= 75 - num){
            text += " ";
        } else {
            text += char;
        }
        
    }
}
function drawCenterChars(num, char){
    var sidesLength = (75 - num)/2;
    var text = "";
    for (var x = 1; x <= 75; x++){
        if (x > sidesLength && x < 75 - sidesLength){
            text += char;
        } else {
            text += " ";
        }
    }
    if (text.length < 75){
        text += " ";
    }
    return text;
}