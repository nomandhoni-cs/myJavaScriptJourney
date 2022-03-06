//This is called Iterative way of the Fibonacci Series.
//You have to declare the variable outside of the  function, it can be in after of the funtion.
//The rule of fibonacci is next value is sum of last 2 value.
// fibo[2] = fibo[2-1] + fibo[2-2];
// fibo[3] = fibo[3-1] + fibo[3-2];
// fibo[4] = fibo[4-1] + fibo[4-2];
// fibo[5] = fibo[5-1] + fibo[5-2];
// fibo[6] = fibo[6-1] + fibo[6-2];
// fibo[n] = fibo[n-1] + fibo[i-2];
// fibo[i] = fibo[i-1] + fibo[2-2];
function fibonacci(n) {
    var fibo = [0, 1];
    for (var i = 2; i <= n; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
var result = fibonacci(2);
console.log(result);