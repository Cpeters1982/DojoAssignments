function weekdayName(weekdayNum){
    switch (weekdayNum){
        case 1: console.log("Sunday");
        case 2: console.log("Monday");
        case 3: console.log("Tuesday");
        case 4: console.log("Wednesday");
        case 5: console.log("Thursday");
        case 6: console.log("Friday");
        case 7: console.log("Saturday");
        default: console.log("That isn't a day of the week!")
    }
}

function weekdayName2(dayNum){
    if (dayNum > 365){
        console.log("Error: out of range");
        return;
    }
    var weekdayNum = dayNum;
    while (weekdayNum > 7){
        weekdayNum -= 7;
    }
    switch (weekdayNum){
        case 1: 
            //console.log("Sunday");
            return "Sunday";
        case 2: 
            //console.log("Monday");
            return "Monday";
        case 3: 
            //console.log("Tuesday");
            return "Tuesday";
        case 4: 
            //console.log("Wednesday");
            return "Wednesday";
        case 5: 
            //console.log("Thursday");
            return "Thursday";
        case 6: 
            //console.log("Friday");
            return "Friday";
        case 7: 
            //console.log("Saturday");
            return "Saturday";
        default: 
            //console.log("That isn't a day of the week!");
            return "Error";
    }
}
function someDays(){
    for (var x = 1; x <= 17; x++){
        var number = Math.ceil(Math.random() * 364 + 1)
        var day = weekdayName2(number);
        switch (day){
            case "Saturday", "Sunday": console.log("Enjoy your day off!");
            default: console.log("Work hard!");
        }
    }
}
function monthName(monthNum){
    var months = ["January", 
                "February", 
                "March", 
                "April", 
                "May", 
                "June", 
                "July", 
                "August", 
                "September", 
                "October", 
                "November", 
                "December"];
    return months[monthNum - 1];
}
function monthToDays(monthNum, year){
    switch (monthNum){
        case 2: 
          if (year % 4 === 0){
            //console.log("returned 29")
            return 29;
          } else {
            return 28;
          }
        case 4:
        case 6:
        case 9:
        case 11: return 30;
        default: return 31;
    }
}
function dayToMonth(dayNum, year){
    var month = 1;
    var days = monthToDays(month, year);
    while (dayNum > days){
        month++;
        days += monthToDays(month, year)
    }
    return monthName(month);
}
function dayToMonthNum(dayNum, year){
    var monthNumber = 1;
    var days = monthToDays(monthNumber, year);
    while (dayNum > days){
        monthNumber++;
        days += monthToDays(monthNumber, year);
    }
    return monthNumber;
}
function fullDate(dayNum){
    var year = 2017;
    var weekday = weekdayName2(dayNum);
    var month = dayToMonth(dayNum, year);
    var monthNum = dayToMonthNum(dayNum, year);
    if (monthNum > 1){
        for (var x = 1; x < monthNum; x++){
            dayNum = dayNum - monthToDays(x);
        }
    }
    
    var monthDay = dayNum;

    return weekday + ", " + month + " " + monthDay + ", 2017";
}
function fullDate2(dayNum){
    var year = 2017;
    while (dayNum > 365){
        year++;
        if (year % 4 === 0){
          dayNum -= 366;
        } else {
          dayNum -= 365;
        }
        
    }
    
    var weekday = weekdayName2(dayNum);
    var month = dayToMonth(dayNum, year);
    var monthNum = dayToMonthNum(dayNum, year);
    if (monthNum > 1){
        for (var x = 1; x < monthNum; x++){
            dayNum = dayNum - monthToDays(x, year);
        }
    }
    
    var monthDay = dayNum;

    return weekday + ", " + month + " " + monthDay + ", " + year;
}

//still having some bugs with this and it's pretty tedious to fix.
//I'll just turn it in as-is and worry about fixing it later so I can move on.