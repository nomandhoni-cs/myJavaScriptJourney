//In this code below I explained 3 type of swap in JavaScript
//Swap value of variable.

//First type of Swap
var a = 7;
var b = 5;
console.log("Before swap: a = ",a, "b = ",b);
var temp = a;
a = b;
b = temp;
console.log("After swap: a = ",a, "b = ",b);

//Second type of Swap
 
var x = 4;
var y = 8;
console.log("Before swap: x = ",x, "y = ",y);
var x = x + y;
var y = x - y;
var x = x - y;
console.log("After swap: x = ",x, "y = ",y);

//Third type of Swap

var p = 9;
var q = 7;
console.log("Before swap: p = ",p, "q = ",q);
[p, q] = [q, p];
console.log("After swap: p = ",p, "q = ",q);

//TEsting VS code V1.45

//Checking is it done or not.