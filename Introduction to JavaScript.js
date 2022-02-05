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
console.log(`Your name is${yourName}`);
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
