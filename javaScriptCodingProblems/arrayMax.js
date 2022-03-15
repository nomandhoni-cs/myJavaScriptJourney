//You can find maximumn value of an array
var marks = [35, 98, 35, 78, 9, 67];
var max = marks[0];
for (let i = 0; i < marks.length; i++) {
    var element = marks[i];
    if(element > max){
        max = element;
    }
    
}
console.log("Highest value is: ",max);
//Need to do this home work.