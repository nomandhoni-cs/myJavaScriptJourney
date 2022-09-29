const normal = [2, 3, 4, 5, 5, 3, 2, 6];
const square = [];
for(let i = 0; i < normal.length; i++){
    const element = normal[i];
    square.push(element * element);
}
console.log(square);
// Map
const square2 = normal.map(function (element) {
  return element * element;
});
console.log(square2);
// Filter
const even = normal.filter(function(element){
    if(element % 2 == 0){
       return element 
    }
})
console.log(even);
// Find
const highest = normal.find( x => x > 4)
console.log(highest);