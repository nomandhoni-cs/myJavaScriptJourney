function getArraySum(numbers) {
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [3, 4, 6, 29, 23];
var result = getArraySum(numbers);
console.log(result);

console.log(getArraySum([1, 1, 1, 1, 6]));