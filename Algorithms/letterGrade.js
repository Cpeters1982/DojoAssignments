function letterGrade(score){
    var grade = "F";
    if (score > 90){
        grade = "A";
    } else {
        if (score > 80){
            grade = "B";
        } else {
            if (score > 70){
                grade = "C";
            } else {
                if (score > 60){
                    grade = "D";
                }
            }
        }
    }
    if (score < 98 && score > 60){
        var stringScore = String(score);
        var secondDigit = stringScore.slice(-1);
        if (secondDigit > 7){
            grade += "+";
        }
        if (secondDigit < 3 && secondDigit != 0){
            grade += "-";
        }
    }
    console.log("Score:" + score + ". Grade: " + grade)
}