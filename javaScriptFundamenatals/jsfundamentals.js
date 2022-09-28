var friendsName = ["Sabbir", "Noman", "Mridul", "Sakib", "Faysal"];
friendsName[4] = "Adrita";

console.log(friendsName[4])
console.log(friendsName)
var modelCrushName = ["Chen Yukee", "Momina"]
console.log(modelCrushName)
//Find the index in an array
var posiotion = friendsName.indexOf("Sakib");
console.log(posiotion);
// If any value is not in the array it will show -1 in the output
friendsAge = [20, 21, 22, 23, 24];
console.log(friendsAge);
//Input a last age in the arrary
friendsAge.push(25);
console.log(friendsAge);
//Find the length of an array
console.log(friendsAge.length);
//By .pop() we can remove the last element from the array
friendsAge.pop();
console.log(friendsAge);
// We can insert elemt inthe begining of the array
friendsAge.unshift(30);
console.log(friendsAge);
//By .shift() we can remove the first element from the array
friendsAge.shift();
console.log(friendsAge);

//Loop
//While Loop
var i = 0;
while (i < 10) {
    console.log("Happy Valentines Day");
    i++;
}
//For Loop
for (var i = 0; i < 10; i++) {
    console.log("Sorry for late wish");
}
var num = 8;
while (num <= 10) {
    console.log(num);
    num++;
}
console.log("Break point");
var friendsGirlFriendsAge = [14, 15, 16, 17, 18, 19, 29];
var lengthOfArray = friendsGirlFriendsAge.length;
console.log("There are " + lengthOfArray + " items in the array.");  
for (var i = 0; i < lengthOfArray; i++){
    console.log(friendsGirlFriendsAge[i]);
}
var nameOfMyTutor = ["Manoj", "Kabir", "Anamul", "Sonjoy", "Nilufa"];
for (var i = 0; i < nameOfMyTutor.length; i++)
{
    console.log(nameOfMyTutor[i]);
}

//Switch
var crushName = "Sundeha";
switch (crushName){
    case 'Momina':
        console.log("Momina is your crush");
        break;
    case 'Umme':
        console.log("You found the right person");
        break;
    default:
        console.log("crush didn't matched");
}

//Function
function sayLoveYou(){
    console.log("Will you be my valentine?")
}

for (var i =  0; i < 10; i++){
    console.log(sayLoveYou());
}

//Function Advanched Usage
function doubleIt(number){
var result = number * 2;
console.log(result);
}
doubleIt(100);

//Another Usecase
function add(number1, number2){
    var result = number1 + number2;
    return result;
}
var sum = add(10, 19);
console.log(sum)
var sum2 = add(20,30);
console.log(sum2)
console.log(add(50,70))

//Objects 
var studentOneInfo = { id:121, Name : 'Noman', age:19};
var studentTwoInfo = { id:122, Name : 'Sabbir', age:20};
var ageOfStudentOne = studentOneInfo.age;
console.log("Age of student one is " + ageOfStudentOne);
//Another way to access the object
var ageOfStudentOne = studentOneInfo["age"];
console.log("Age of student one is " + ageOfStudentOne);
//Another way to access the object
var agePropName ="age";
var ageOfStudentTwo = studentTwoInfo[agePropName];
console.log("Age of student one is " + ageOfStudentTwo);
console.log(studentOneInfo);
console.log(studentTwoInfo);

//Add new property to the object
studentOneInfo.phone = "01678945678";
studentTwoInfo.girlFriend = "Fariya";
console.log(studentOneInfo);
console.log(studentTwoInfo);