//This factorial recursive is very important for interview.
// 0! = 1
// 1! = 1
// 2! = 1 * 2
// 3! = 1 * 2 * 3
// 4! = 3! * 4
// 5! = 4! * 5
// 6! = (6 - 1)! * 6
// 7! = (7 - 1)! * 7
// n! = (n - 1)! * n
function fact(n) {
    if(n == 0){
        return 1;
    //By this return I can throw out the value outside of loop
    }
    else{
        return n * fact(n-1);
            //By this return I can throw out the value outside of loop
    }
}
var result = fact(6);
console.log(result);
