
function clockHandAngles(seconds){
    var secondHandDegrees = Math.trunc((seconds / 60 * 360) % 360);
    var minutes = seconds / 60;
    var minuteHandDegrees = Math.trunc((minutes / 60 * 360) % 360);
    var hours = minutes / 60;
    var hourHandDegrees = Math.trunc((hours / 12 * 360) % 360);
    console.log("Hour Hand: " + hourHandDegrees + " degs. Minute Hand: " + minuteHandDegrees + " degs. Second Hand: " + secondHandDegrees + " degs.")
}

function clockHandAnglesWithWeeks(seconds){
    var secondHandDegrees = Math.trunc((seconds / 60 * 360) % 360);
    var minutes = seconds / 60;
    var minuteHandDegrees = Math.trunc((minutes / 60 * 360) % 360);
    var hours = minutes / 60;
    var hourHandDegrees = Math.trunc((hours / 12 * 360) % 360);
    var days = hours / 24
    var weekHandDegrees = Math.trunc((days / 7 * 360) % 360);
    console.log("Week Hand: " + weekHandDegrees + " degs. Hour Hand: " + hourHandDegrees + " degs. Minute Hand: " + minuteHandDegrees + " degs. Second Hand: " + secondHandDegrees + " degs.")
}





