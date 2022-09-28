//If the number is not divisible by anynumber less than that number but only divisible by that number thats called prime number.
function isPrime(n) {
    for(i = 2; i < n; i++){
        //   console.log(i, n % i);
        if(n % i == 0){
            return "Your Number " + n + " is not a Prime Number";
        }
    } return 'Your Number ' + n + ' is Prime Number';
}
var result = isPrime(13);
console.log(result);

//In this module is all code is for interview