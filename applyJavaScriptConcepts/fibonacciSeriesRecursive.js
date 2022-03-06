//[0, 1, 1, 2, 3, 5, 8, 13]
function areEven(n) {
    if(n == 0){
        return [0];
    }
    else if (n == 1) {
        return [0, 1];
    }
    else{
        //Calculate Array n-th element
        var fibo = areEven(n-1);
        var nextElement = fibo[n-1] + fibo[n-2];
        fibo.push(nextElement);
        return fibo;
    }
}
var result = areEven(18);
console.log(result);