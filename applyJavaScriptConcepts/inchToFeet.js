// //In this module all about applying JavaScript concepts
function inchToFeet(inch) {
    var feet = inch / 12;
//Here I used .toFixed(3) to round the number
    feet = feet.toFixed(3);
    return feet;
}
console.log("Length of area " + inchToFeet(300) + " Feet");
console.log("Leangth of Bed  " + inchToFeet(27) + " Feet");
// var inch = 156;
// var feet = inch/12;
// console.log(feet)