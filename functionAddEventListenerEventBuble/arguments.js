//arguments is like an object. You can use it only inside of a function
function addNumbers(numberOne, numberTwo) {
  var sum = 0;
  // sum = numberOne + numberTwo that means you can't sum more than two parameter
  //By using arguments you can access all of the parameter
  //arguments like an array but you can't push or pop element onto it.
  console.log("This is the argument ", arguments);
  for (let i = 0; i < arguments.length; i++) {
    const element = arguments[i];
    sum = sum + element;
  }
  return sum;
}
var result = addNumbers(1, 3, 5, 9);
console.log(result);

function addName(firstName, lastName) {
  let fullName = "";
  for (let i = 0; i < arguments.length; i++) {
    const namePart = arguments[i];
    fullName = fullName + " " + namePart;
  }
  return fullName;
}

var result = addName("Abdullah", "Al", "Noman", "Dhoni");
console.log(result);

console.log(addName('Sabbir','Ahmed','Shuvo'));