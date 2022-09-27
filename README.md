# myJavaScript

In this repository I will share the JavaScript code from my Beginning

## A huge thanks to GitHub Copilot to helping me to comment inside of code

### Table of Contents

**[Introduction to JavaScript](#introduction-to-javascript)**<br>
**[JavaScript Fundamentals](#javascript-fundamentals)**<br>
**[Apply JavaScript Concepts](#apply-javascript-concepts)**<br>
**[JavaScript topics learned from LWS](#javascript-topics-learned-from-lws)**<br>
**[JavaScript Coding Problems](#javascript-coding-problems)**<br>
**[Problem Solving Assignment](#problem-solving-assignment)**<br>
**[Serious Web Developer Tips And Tricks](#serious-web-developer-tips-and-tricks)**<br>
**[How JavaScripts Works DOM](#how-javascripts-works-dom)**<br>
**[Function addEventListener Event Bubble](#function-addeventlistener-event-bubble)**<br>
**[Noman Dhoni Bank Limited](#noman-dhoni-bank-limited)**<br>

## Introduction to JavaScript

### Topics:

- Data Types **<br>
  <kbd>Line 1</kbd> to <kbd>Line 58</kbd>**<br>[IntroductionToJavaScript.js](https://github.com/nomandhoni-cs/myJavaScriptJourney/blob/master/introductionToJavaScript/IntroductiontoJavaScript.js)
- String <br>
1. UPPER CASE: `.toUpperCase()` by this you can make a normal string to Upper Case. <br>
2. lower case: `.toLowerCase()` by this you can make a normal string to Lower Case.
3. Find the location of a word: `.indexOf()` by this you can find the index of string.
- Boolean Variable
- Number Variable
- Operators
- Random Number
```
// to get a random integer numeber between 100
var randomInteger = Math.random() * 100;
var randomInteger = Math.round(randomInteger);
console.log(randomInteger); //84 Some random number
```
- JavaScript Time Clock
``` 
// JavaScript Time- Clock
var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();
var sec = date.getSeconds();
var ms = date.getMilliseconds();
var day = date.getDay();
console.log(date + " " + hour + ":" + minute + ":" + sec + ":" + ms + " " + day);
//Mon Sep 26 2022 21:16:08 GMT+0600 (Bangladesh Standard Time) 21:16:8:98 1
```

## JavaScript Fundamentals

### Topics:

- [javaScriptFundamentals.js](https://github.com/nomandhoni-cs/myJavaScriptJourney/blob/master/javaScriptFundamentals/jsfundamentals.js)
- Array
1. `.indexOf("Items from Array")`
By this you can find what is the index of that element
```
var friendsName = ["Sabbir", "Noman", "Mridul", "Sakib", "Faysal"];
//Find the index in an array
var posiotion = friendsName.indexOf("Sakib");
console.log(posiotion);// 3
```
2. `.length`
By this you can find what is the length of an array.
```
friendsAge = [20, 21, 22, 23, 24];
console.log(friendsAge.length);// 5
```
3. `.pop(existingElement)` and `.push(newElement)' <br> 
By these you can Insert a new Item to an array and Delete item from an array.
```
// .pop() will remove last element
friendsAge.pop();
console.log(friendsAge);// 20 21 22 23
friendsAge.push(25);
console.log(friendsAge);// 20 21 22 23 25
```
4. `.shift()` and `.unshift(newElement)` <br>
By `.shift()` we can remove the first element from the array. <br>
By `.unshift(newElement)` can insert elementt in the begining of an array.
```
friendsAge.shift();
console.log(friendsAge); // 21 22 23 25
friendsAge.unshift(30);
console.log(friendsAge); // 30 21 22 23 25
```

## Apply JavaScript Concepts

### Topics:

- Prime Numbers
- Factorial (Regular, While-Loop, Minus for loop, Minus While Loop, Recursive)
- Use of "const" and "let"
- Even number Generator
- Fibonacci (Regular, Recursive, Full series Recursive, While-Loop)
- Inch to Feet
- Leap Year
- Odd Number Series
- Sum of Series

## JavaScript topics learned from LWS
### Topics :
- ```setInterval(functionName, 5)``` to run a function after a specific time. Here after 5 mill sec  
- ```stopInterval(variableNameAssignedAsInterval)``` to stop the interval. Otherwise the Interval will run forever.
- ```=>``` The arrow function.
## JavaScript Coding Problems

### Topics:

- Maximum value from an Array
- Sum of an Array
- Sum of an Array by using Function
- Ludo Dice by Using Math.random()
- Maximum and Minimum variable
- Swap value between variable
- Count word in a Sentence / String
- Reverse a Sentence
- Find duplicate from an Array

## Problem Solving Assignment

### Questions:

- Convert Feet into Mile
- 1 cubic foot wood needed to make 1 Chair, 3 cubic foot wood needed to make 1 Table, 5 cubic foot wood needed to make 1 Bed. Now make a function to calculate from 3 inputs and return.
- 1st to 10th floor of a building is 15 feet tall. 11th to 20th floor of a building is 12 feet tall. Above 20th floor all floor is 10 feet tall. 1000 Bricks needed to build 1 feet of Building. Now make a function to calculate amount of Bricks if only the Building floor is given.
- List your friends name in an Array. Now make a function that will return from that Array, which name is smaller.

## Serious Web Developer Tips And Tricks

#### Learning Resources

- Stack Overflow
- Read Article from Medium
- JavaScript Weekly, HTML Weekly, CSS Weekly

#### Snippets

- ! => to bring Basic HTML5 Snippet
- div.row =><br> `<div class ="row"> </div>`
- .row*3>h1+p+btn =>
  ```
  <div class ="row">
      <h1></h1>
      <p></p>
      <button></button>
  </div>
  <div class ="row">
      <h1></h1>
      <p></p>
      <button></button>
  </div>
  <div class ="row">
      <h1></h1>
      <p></p>
      <button></button>
  </div>
  ```
- span#userName => <br>`<span id="userName">...</span>`
- Google Emmet Cheat Sheet

#### Extensions

- Live Server
- Code Spell Checker
- JavaScript ES6 Code Snippets
- ES Lint
- Prettier

#### Learn Using Shortcuts

- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd> to Open Command Prompt
- <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>=></kbd> (Arrow key to select whole word)
- Learn VS Code Keyboard Shortcuts

#### Improve Typing Speed

- Typing.com is a Great Resource for Learn Typing
- Typing Master Desktop APP
- Test Typing Speed from Various Website

## How JavaScripts Works DOM

### Interview Questions
- Definition of Java Script
- Sequence of Script file
- ```.appendChild(element```) => to insert a child into a parent  
- ```.getElementById/Class/Tag name``` => to select an element 
- ```.createElement``` => to create an element 
- ```.innerHTML``` => insert HTML inside of an element 

## Function addEventListener Event Bubble
### Topics :
##### Argument
- Argument is an array like Object

##### Function
- There are four types of functions

##### ```.addEventListener()```

##### Event Bubble
![Event Bubbling JavaScript](https://javascript.info/article/bubbling-and-capturing/eventflow.svg)
## Noman Dhoni Bank Limited

### Project : [Noman Dhoni Bank](https://nomandhoni-cs.github.io/NomanDhoniBank)
##### Topics:
- parseFloat() to make a string into Float number

### Lessons :
- Firstly understand the work details from your client or higher authority
- Breakdown a big problem into step by step
- Commit and Pull the git after a step done
- After solve the problem try to remove multiple line by using function

##### You can contribute to my bank website Noman Dhoni Bank Ltd.