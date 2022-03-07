function ludoDice(n){
    var dice = Math.random() * n;
    dice = Math.ceil(dice);
    //Here I used Celi to debug the problem. If i use round It gives me output 0
    return dice;  
}
var result = ludoDice(6);
console.log(result);




// for (let i = 0; i < 10; i++) {
//     var dice = Math.random() * 6;
//    dice = Math.ceil(dice);
//       console.log(dice);
//   }