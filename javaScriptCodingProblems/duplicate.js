var idNumber = [1, 3, 4, 2, 5, 3, 7, 3, 2];
var uniqueId = [];
for(let i = 0; i < idNumber.length; i++){
    var element = idNumber[i];
    var index = uniqueId.indexOf(element);
    if(index == -1){
        uniqueId.push(element);
    }
}
console.log(uniqueId);