//Convert feet into Mile
function feetToMile(feet) {
    if(feet >= 0){
    var mile = feet / 5279.989441;
    return mile.toFixed(4);
    }
    else{
        return "Keep it Real!"
    }
}
console.log(feetToMile(20000));

function woodCalculator(chair, table, bed){
    if(chair >= 0 && table >= 0 && bed >= 0)
    {
    var woodNeedForChair = chair * 1;
    var woodNeedForTable = table * 3;
    var woodNeedForBed = bed * 5;
    return woodNeedForChair +" for Chair " + woodNeedForTable +" for Table " + woodNeedForBed +" for Bed" + " (Unit in Cubic Feet)";
    }
    else{
        return "You Gave Wrong Type of value in the Wood calculator";
    }
}
console.log(woodCalculator(0,9,2));