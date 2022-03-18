var idNumber = [1, 3, 4, 2, 99, 3, 5, 7, 3, 2];
var uniqueId = [];
for(let i = 0; i < idNumber.length; i++){
    var element = idNumber[i];
    //Here below line will check is this number is in the unique number array.
    //If not it will return the index value -1
    var index = uniqueId.indexOf(element);
    if(index == -1){
        //.push to add element into array
        uniqueId.push(element);
    }
    // else{
    //     uniqueId.pop(index);
    // }
}
console.log(uniqueId);