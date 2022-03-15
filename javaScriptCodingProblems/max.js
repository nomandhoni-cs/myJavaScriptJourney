var noman = 950;
var sabbir = 650;
var mridul = 550;

//This is the Another way of calculating maximum value
//You can use Math.max(variable1, variable2, variablen) to compare value.
var max = Math.max(noman, sabbir, mridul);
console.log(max);
//End
//Compare value and find maximum value by if else condition
if(noman> sabbir){
    if (noman > mridul){
        console.log("noman is Bigger");
    }
    else{
        console.log("mridul is Bigger");    
    }
}
else{
    if (sabbir > mridul) {
    console.log("sabbir is Bigger");
    }
    else{
    console.log("mridul is Bigger");
    }
}