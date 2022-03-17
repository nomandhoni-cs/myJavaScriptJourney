var speech = "I am a Good Boy. Will you accept my love, Umme K21ls21m Sundeha?";
console.log(speech.length);
//You can see the direct charecter from by index number like speech[n]
console.log(speech[3]);

//
var count = 0;
//THis for loop will count every space between words and return how much space is in it.

//Corner Case: you get less space in a sentence usually after the sentence we don't give space

for (let i = 0; i < speech.length; i++) {
    //Here I defined element as every characther of avove sentence including space " ".
    var element = speech[i];
    // && you have to fulfull both condition
    if (element == " " && speech[i-1] != " ") {
    count = count + 1;
    }
//    console.log(element);
}
count++;
console.log(count);