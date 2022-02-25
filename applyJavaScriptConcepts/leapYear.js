function leapYear(year){
    const inputYear = year % 4;    
    if(inputYear == 0){
        return true;
    }
    else{
    return false;
    }
}
let isLeapYear2000 = leapYear(2000);
if (isLeapYear2000 == true){
    console.log("Leap Year");
}
else{
    console.log("Not a Leap Year")
}
// console.log(isLeapYear2000);

//Home Work see leap year code from google.