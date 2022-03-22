//Questions are in the Documentation
//Convert feet into Mile
//1 mile = 5279.98 feet = 5280 feet
function feetToMile(feet) {
    if(feet >= 0){
    var mile = feet / 5279.989441;
    //Used .toFixed(4) take 4 decimal number.
    return mile.toFixed(4);
    }
    else{
        return "Keep it Real!, Otherwise it will be your Nightmare."
    }
}
console.log(feetToMile(38300) + " Miles");

//Calculate how much amount of wood do you need to make chair, table & Bed 
function woodCalculator(chair, table, bed){
    if(chair >= 0 && table >= 0 && bed >= 0)
    {
    var woodNeedForChair = chair * 1;
    var woodNeedForTable = table * 3;
    var woodNeedForBed = bed * 5;
    return woodNeedForChair +" for Chair " + woodNeedForTable +" for Table " + woodNeedForBed +" for Bed" + " (Unit in Cubic Feet)";
    }
    else{
        return "You Gave Wrong Type of value in the Wood calculator but The good thing is that you can build whatever you want in parellel Universe.";
    }
}
console.log(woodCalculator(29,9,2));

//Brick Calculator 
//Floor 1 -10 are 15 feet tall.
//Floor 11-20 are 12 feet tall.
//Avobe of 20 all floors are 10 feet tall.
//1000 bricks are needed to build 1 feet.
function brickCalculator(floorNumber) {
    //Firstly See if the Bulding Exist or Not
    if(floorNumber >= 0){
        //Declared 2 variable to calculate nubers of Bricks needed and See How much tall the building is in feet
        var bricks;
        var feetTallBulding;
        //See The building is taller than 20 or not. If taller than that It will exicute below if condition
        if (floorNumber >= 21) {
            //Calculate how much floor is avobe 20th floor
            var floorInThirdSegment = floorNumber - 20;
            feetTallBulding =(10*15) + (10*12) + (floorInThirdSegment*10);
            bricks = feetTallBulding * 1000;
            return bricks;
        }
        // See the building is taller 11 floor and smaller than 21 floor.
        else if(floorNumber >= 11 && floorNumber <= 20){
            var floorInSecondSegment = floorNumber - 10;
            feetTallBulding = (10*15) + (floorInSecondSegment*12);
            bricks = feetTallBulding * 1000;
            return bricks;
        }
        //If avobe all condition fail that means the Building is smaller than 11 floor. 
        else{
            feetTallBulding =(floorNumber*15);
            bricks = feetTallBulding * 1000;
            return bricks;
        }
    }
    else{
        return "You can't calculate the number of Bricks, It is in the Parallel Universe."
    }
}
console.log(brickCalculator(84) + " Bricks");

// //Tiny Friend (See who's name is smaller from an Array.)
//This was Nightmare for me saw result from StackOverflow
function tinyFriend(friendsName) {
    let shortestName = friendsName[0];
    for (let i = 0; i < friendsName.length; i++) {
        //It will see which string length is Big
        if(friendsName[i].length < shortestName.length){
            shortestName = friendsName[i];
        }
    }
    return shortestName;
}
var friendsName = ["Noman", "abxc", "Sabbir", "Dipu","Mridul"];
var result = tinyFriend(friendsName);
console.log(result);

//giving attendence