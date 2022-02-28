function fact(n){
    var factorial = 1;
    for(var i = 1; i<=n; i++){
    factorial = factorial * i; 
    }
    return factorial;
    //By this return I can throw out the value outside of loop
}
var result = fact(2);
var result2 = fact(8);
console.log(result2);
console.log(result);