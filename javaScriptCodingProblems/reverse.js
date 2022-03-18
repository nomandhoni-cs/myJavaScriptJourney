//This function is for reverse a String 
function reverseText (text){
    var reverse = "";
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        //You have to place char in the first position thats all.
        reverse = char + reverse;
    }
    return reverse;
}
var text = "Hello world";
console.log(reverseText(text));
var sentence = reverseText("Hello Umme? How are you?")
console.log(sentence);