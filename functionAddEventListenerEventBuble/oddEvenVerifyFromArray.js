var oddEven = [3, 4, 6, 29, 23, 18, 20];
function numbers(oddEven) {
  for (var i = 0; i < oddEven.length; i++) {
    const element = oddEven[i];
    if (element % 2 == 0) {
      console.log(element, "is even");
    } else {
      console.log(element, "is odd");
    }
  }
}
var result = numbers(oddEven);
console.log(result);
