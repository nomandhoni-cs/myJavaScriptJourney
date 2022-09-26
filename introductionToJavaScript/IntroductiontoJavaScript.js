// In JavaScript 'var' is a keyword.
//You can't give space in the var name as 'banana Price' correct syntax is 'bananaPrice'

//Here I used the Integer Variable
var bananaPrice = 5;
//Here I used console.log to print out the bananaPrice 
console.log("The price of a banana is $" + bananaPrice);
//Here I used console.log to print out the bananaPrice variable type
console.log("The type of bananaPrice is " + typeof bananaPrice);

//Here under " " to declare a variable that is a string
var yourName = "Noman";
//Here i used TypeScript to print out the variable yourName
console.log(`Your name is ${yourName}`);
var sayHello = "Hello";
console.log(sayHello + " " + yourName);
//Here I used typeof to check the type of the variable type
console.log(typeof(sayHello));

//Array
var friendsName = ["Noman", "Sabbir", "Mridul", "Faysal"];
var fruits = ["Banana", "Orange", "Apple", "Mango"];
//Here I used console.log to print out the fruits type
console.log(typeof(fruits));
//Here I used console.log to print out the fruits array
console.log(fruits[3]);

//Here comes the fun part
console.log(yourName + " Loves to eat " + fruits[3]);

//Also I can count the number of elements in the array
console.log(fruits.length);

//Here i used for loop  to print the array with name of friends
for (var i=0; i<friendsName.length; i++){
    console.log(friendsName[i] + " Loves to eat " + fruits[i]);
}

//Bolean Variable
var isRaining = true;
var isSnowing = false;
//Here I used console.log to print out the isRaining type
console.log(typeof(isRaining));
console.log(isRaining);
 
//HomeWork
//Number Variable 
var priceOfBanana = 5;
var priceOfOrange = 10;

//String Variable
var nameOfMyTutor = "Jhankar";
var lastNameOfMyTutor = "Mahbub";

//Boolean Variable
var isMyTutorMale = true;
var isMyTutorFemale = false;

//Array Variable is Object type in JavaScript
var myTutors = [ "Jhankar", "Mahbub", "Kabir", "Anamul"];
var myFafouriteCars = ["BMW", "Audi", "Toyota", "Honda"];
console.log(typeof myTutors);

//A string Sentence
var sentence = 'I Love my Country and my country name is Bangladesh';
console.log(sentence);
//Sentence in lower case
console.log(sentence.toLowerCase());
//Sentence in upper case
console.log(sentence.toUpperCase());

//Find the posiotion of a word in a sentence
console.log(sentence.indexOf("and"));
//It will return -1 if the word is not found
console.log(sentence.indexOf("Noman"));
//Remember This indexOf method is case sensitive

//Below is the example of the split method in JavaScript
// split method is used to split the string into an array of substrings
//Split is used for divede the string
console.log(sentence.split(" "));
//Avobe I used space to split the sentence

// Below is a exaple of a float variable
var floatNumber = 5.5;
console.log(typeof floatNumber);
console.log(floatNumber);

//Make a number or float into a string
floatNumber = toString(floatNumber);
console.log(typeof floatNumber);

//String number
var stringNumber = "5.67";
// Here I used parseInt to convert the string number into a integer
var stringNumber = parseInt(stringNumber);
console.log(typeof stringNumber);
console.log(stringNumber);
//Here I used parseFloat to convert the string number into a float
var stringNumber = parseFloat(stringNumber);
console.log(typeof stringNumber);
console.log(stringNumber);

var firstFloatNumber = 0.2;
var secondFloatNumber = 0.3;
var multiplication = firstFloatNumber * secondFloatNumber;
console.log(firstFloatNumber * secondFloatNumber);
//The result will be 0.060000000000000005
//Here I Used the toFixed method to round the number]
console.log(multiplication.toFixed(3));
//Here I used the toFixed(1) take one number after the decimal point

multiplication = ''+multiplication;
//Abobe i used the ''+ multiplication to convert the number into a string
console.log(typeof multiplication);
console.log(multiplication * secondFloatNumber);
//The result is 0.06.3 beacause string can't be multiplied
multiplication = parseFloat(multiplication);
console.log(multiplication);
//Here I used parseFloat to convert the string number into a float
multiplication = parseInt(multiplication);
//In print out the result you see 0 cause the multiplication is a integer
console.log(multiplication);
//Here I used parseInt to convert the float number into a integer
console.log(typeof multiplication);

// Operators
// Sum => + , Subtraction => - , Multiplication => * , Division => / , Modulus => % , Exponent => ** , Increment => ++ , Decrement => -- , Assignment => = , Comparison => == , Not Equal => != , Greater Than => > , Less Than => < , Greater Than or Equal => >= , Less Than or Equal => <= , Logical AND => && , Logical OR => || , Logical NOT => ! , Bitwise AND => & , Bitwise OR => | , Bitwise XOR => ^ , Bitwise NOT => ~ , Left Shift => << , Right Shift => >> , Unsigned Right Shift => >>> , Assignment Addition => += , Assignment Subtraction => -= , Assignment Multiplication => *= , Assignment Division => /= , Assignment Modulus => %= , Assignment Exponent => **= , Assignment Left Shift => <<= , Assignment Right Shift => >>= , Assignment Unsigned Right Shift => >>>= , Assignment Bitwise AND => &= , Assignment Bitwise OR => |= , Assignment Bitwise XOR => ^= , Assignment Bitwise NOT => ~= , Assignment Bitwise Left Shift => <<= , Assignment Bitwise Right Shift => >>= , Assignment Bitwise Unsigned Right Shift => >>>=

// Sum Operator
var firstNumber = 5;
var secondNumber = 10;
//Here I used the + operator to sum the two numbers
var sum = firstNumber + secondNumber;
console.log("Here the sum is " + sum);
 // Here I used  - operator to subtract the two numbers
var sub = secondNumber - firstNumber;
console.log("Here the sub is " + sub);
//Here I used the * operator to multiply the two numbers
var multiplication = firstNumber * secondNumber;
console.log("Here the multiplication is " + multiplication);
//Here I used the % operator to find the remainder of the two numbers
var modulas = firstNumber % secondNumber;
console.log("Here the Reminder is " + modulas);
// Here I used the  / operator to divide the two numbers
var division = secondNumber / firstNumber;
console.log("Here the divition is " + division);


// Increment Operator & Decrement Operator
firstNumber++;
console.log("Here the firstNumber is " + firstNumber);
//Here I used the ++ operator to increse the number
secondNumber--;
console.log("Here the secondNumber is " + secondNumber);
// Here I used the -- operator to decrease the number

//Also you can make it like this firstNumber = firstNumber + 1; or secondNumber = secondNumber - 1;


deviceName = "Iphone";
devicePrice = 1000;
deviceQuantity = 2;
 memo = "I want to buy " + deviceName + " for " + devicePrice + " USD and price of " + deviceQuantity + " device is " + (devicePrice * deviceQuantity) + " USD";
console.log(memo);

//As you can see avobe you can use the + operator to add the string and number


// Class Part 9

//Absolute number
var absoluteNumber = -5;
// Here I used the Math.abs() method to find the absolute number it will return 5
console.log("The absolute number of " + absoluteNumber +" is " + Math.abs(absoluteNumber));


// celing and floor value
var number = 5.5;
// Here I used the Math.ceil() method to find the ceiling value it will return 6
console.log("The ceiling value of " + number +" is " + Math.ceil(number));
// Here I used the Math.floor() method to find the floor value it will return 5
console.log("The floor value of " + number +" is " + Math.floor(number));

// Here I used the Math.round() method to find the round value it will return 6 if the number is .5 or more it will increase the number
var result = Math.round(number);
console.log("The round value of " + number +" is " + result);

var numberTwo = 5.4999999;
// Here Math.round() method will return 5 case .4999999 is less than .5
var resultTwo = Math.round(numberTwo);
console.log("The round value of " + numberTwo +" is " + resultTwo);


//Random Number
var randomNumber = Math.random();
console.log(randomNumber);
// to get a random integer numeber between 100
var randomInteger = Math.random() * 100;
var randomInteger = Math.round(randomInteger);
console.log(randomInteger);

// If - Else condition
var hour = 10;
if(hour > 9){
    console.log( "You should go to sleep it's " + hour + " o'clock");
}
else{
    console.log("After study you should go to sleep it's " + hour + " o'clock");
}


var jobPlaced = true;
var savingsAmount = 110000;
//Below i used the && operator to check if the jobPlaced is true and the savingsAmount is greater than 100000

//You have to fullfill both conditions to get the result
if(jobPlaced == true && savingsAmount > 100000){
    console.log("You should get married");
}
else{
console.log("You should get a job");
}

// || Operator you have to fulfill atlist one condition to get the result
if(jobPlaced == true || savingsAmount > 100000){
    console.log("You should get married");
}
else if (jobPlaced == true){
    console.log("We are watching bride for you and save your money");
}
else{
console.log("You should get a job");
}


// JavaScript Time- Clock
var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();
var sec = date.getSeconds();
var ms = date.getMilliseconds();
var day = date.getDay();
console.log(date + " " + hour + ":" + minute + ":" + sec + ":" + ms + " " + day);

bananaPrice = 10;
console.log(bananaPrice)