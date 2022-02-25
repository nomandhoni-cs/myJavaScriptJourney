// 0! = 1
// 1! = 1
// 2! = 1 * 2
// 3! = 1 * 2 * 3
// 4! = 3! * 4
// 5! = 4! * 5
// 6! = (6 - 1)! * 6
// 7! = (7 - 1)! * 7
// n! = (n - 1)! * n
function factorial(n) {
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
var result = factorial(6);
console.log(result);
