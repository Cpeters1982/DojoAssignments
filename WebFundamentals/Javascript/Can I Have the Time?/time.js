var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";



function time(hour,minute,period){

var firstPiece = "";
var timeOfDay = "";

if (minute >= 30){
    firstPiece = "almost "
    hour += 1;
}

if(minute < 30){
    firstPiece = "just after "
}

if(period == "AM"){
    timeOfDay = "morning"
} else {
    timeOfDay = "evening"
}


console.log("It's " + firstPiece + hour + " in the " + timeOfDay)

}



time(HOUR,MINUTE,PERIOD);

HOUR = 7;
MINUTE = 15;
PERIOD = "PM";


time(HOUR,MINUTE,PERIOD);

HOUR = 6;
MINUTE = 35;
PERIOD = "AM";

time(HOUR,MINUTE,PERIOD);