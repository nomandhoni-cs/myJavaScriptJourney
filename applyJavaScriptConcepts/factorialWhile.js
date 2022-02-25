function factorial(input) {
    fact = 1;
var i = 1;
while (i <= input) {
    fact = fact * i;
    i++;
}
return fact;
}
var result = factorial(0);
console.log(result);