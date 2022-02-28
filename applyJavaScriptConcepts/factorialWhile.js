function factorial(input) {
var fact = 1;
var i = 1;
//I must take initial value of i is 1 because 0!=1 
    while (i <= input) {
        fact = fact * i;
        i++;
}
return fact;
//If you want to get calculated value from function you have to use return.
}
var result = factorial(4);
console.log(result);