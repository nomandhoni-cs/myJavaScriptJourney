// One Parameter
const add = (num) => num + 2;
console.log(add(2)); // 4
// No Parameter
const number = () => 5;
console.log(number()); // 5
// Multiple parameter
const multiple = (x, y) => x * y;
console.log(multiple(2, 3)); // 6
// Multiple Operation
const bigFunc = (x, y) => {
    x = x + 2
    y = y + 2
    const sum = x + y;
    return sum;
}
console.log(bigFunc(2, 3)); // 9