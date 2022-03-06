// 1 + 2 + 3 + 4 + ....................+ n
function seriesSum(n){
    if (n == 0 || n == 1) {
        return n;
    }
    else{
//Here THe formula is sum = n + f(n-1)
    return n + seriesSum(n-1);
    }
}
//Here the bug is you can't calculate negative value.
var result = seriesSum(61);
console.log(result);