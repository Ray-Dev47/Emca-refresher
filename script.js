// // variable
// var msg = 'Hello Ray';
// var msg = 'Morning Ray';

// // console.log(msg);

// // let and const
// let letMsg = true;
// if(letMsg){
//     letMsg = 'Merry Christmas Ray'
// }
// console.log(letMsg);

// // Declare multiple variables in one statement
// let a,b,c,d;

// // Challenge 1
// // add a value to a variable using prompt
// // Create a variable with a welcome msg, add the new input from the prompt to the string using + between the variables
// let restMsg = 'Welcome '
// // let name2 = prompt('What is your name')
// // if(name2){
// //     alert(`${restMsg + name2}`)
// // }

// // or
// // alert(`${restMsg + name2}`) // works

// // template literal challenge - use prompt to ask users name and use template literal
// let restMsg2 = 'Hello'
// // let name3 = prompt('What do i call you?')
// // console.log(`${restMsg2} ${name3}`)  // QED

// // data types
// let one = '1'
// let integer = parseInt(one)
// console.log(integer)

// Operators
// + - * / % ** ++ --

// Challenge 2 - Use prompt to ask the number of miles in a kilometer, output the prompt value in console
// let quest = parseInt(prompt('How many Miles?'));
// if(quest){
//     let factor = quest * 1.60934
//     // console.log(factor) // works
//     alert(`${quest} Miles is equal to ${factor} Kilometers`)     // also work
// }

let num1 = 50;
let num2 = 60;
num1++; // 51
num2--; // 59
let total = num1 + num2;
console.log(total); // 110;

//Challenge 3 Check if a number exist and also check if it is greater than 50

// let isCheck = prompt('Please enter a number');
// if(isCheck >= 50){
//     alert(`${isCheck} exist and is greater than 50`)
// }else{
//     alert(`${isCheck} does not exist and is less than 50`)
// }

// challenge 4 - check if a variable is odd or even, use modulus to determine output
// let numCheck = prompt(`Enter any value to check if even or odd`)
// if(numCheck  % 2 == 0){
//     alert(`${numCheck} is even`)
// } else{
//     alert(`${numCheck} is odd`)
// }

// multiple conditionals

// challenge 5 - ask a via prompt, check if eligible to enter at 18+ , show a msg to allow or deny depending on the age using tenary operator, setup a membership boolean value and add second check to ensure the user is a member and output a message to them if they are or not allowing or denying entry.

// let ageCheck = prompt('Please enter your age to confirm eleigibility');

// if(ageCheck >= 18){
//     alert(`You are eligible`)
// } else{
//     alert(`You are not eligible`)
// }

// 2.)
let ageCheck2 = 18;
let checkAns =
	ageCheck2 >= 18 ? console.log('Yes qualified') : console.log('Not qualified');
console.log(checkAns);

if (ageCheck2 >= 18) {
	console.log(`${true}, welcome`);
} else {
	console.log(`${false}, not qualified`);
}

// challenge 5 - set a default time , create a messag to be output according to the time e.g: good morning, output the message in the console.

// let defaultTime = 24;
// let whatisTime = prompt('What is the time?')

// if(whatisTime < 11){
//     console.log(`Good Morning`)
// } else if (whatisTime >= 12 && whatisTime < 18 ){
//     console.log(`Good afternoon`)
// } else if(whatisTime >= 18 && whatisTime <= 24){
//     console.log(`Good Evening`)
// } else{
//     console.log(`Invalid Time entered`)
// }

// functions - blocks of reusable codes thats performs a specific task or calculate a value

// Challenge 7 - Create a function to output a message from a variable into the console, invoke the function 3 times everytime increasing the value of the global variable that counts the number of times the function runsa

// Create a function to output into the console the results of adding 10 to a number that is passed into the function

// 1.)
let count = 1;
function myFunction() {
	console.log(`Message outputed from a function`);
	console.log(`${count++} times to run`);
}

myFunction();
myFunction();
myFunction();

// 2.)
function funcAdd(a) {
	return a + 10;
}
console.log(funcAdd(20)); // 30

//  function parameters - they are arguments that gets passed in () when defining a function, can be single or multiple
// function Arguments - are the values received when the func is invoked
//  3 different ways to create functions:
function addition(numOne, numTwo = 30) {
	console.log('Number 1' + numOne);
	console.log('Number 2' + numTwo);
}
// console.log(addition(20, 10));
// console.log(addition(20));

// function return

//  Create a function that multiples to values and returns the result
function multiplyTast(a, b) {
	return a * b;
}
// console.log(multiplyTast(6, 7));

// function in HTML (done)

// function declaration vs function expression
// expression
let numCalc = function calc(c, d) {
	return c * d;
};
console.log(numCalc(5, 5));

// Function scope - how JS executes contexts
let a = 'test';

function testScope() {
	let b = ' scope';
	console.log(a + b);
}
// testScope(); // works - bcos it is globally scoped
// console.log(b); // Uncaught ReferenceError: b is not defined ----> is is bcos b is locally scoped while a is globally scoped

// Function recursion - allows us create a quick loop of content, its a functions that calls itself within itself
// challenge 8 --> Create a function that asks for a guess from the user. Use the guess value to compare to see if the user guessed correctly let them know if correct or incorrect . Bonus: Using a tenary operator to provide sugestion for the next guess when the user is wrong.

let rightGuess = 17;


// function guess(){
//     let quest = prompt('Please guess a number between 1 to 20');
//     if(quest == rightGuess){
//         return  alert(`yes ${rightGuess} is the correct guess`)
//     } 
//     else if(quest !== rightGuess){
//         return guess(alert("Wrong ans, please try again"));
//     }
    
// }
// guess()


// Bonus Using Tenary Operator

// function guess(){
//     let quest = prompt('Please guess a number between 1 to 20');
//     (quest == rightGuess) ?  alert(`yes ${rightGuess} is the correct guess`) : guess(alert("Wrong ans, please try again"))
    
// }
// guess()

// -IIFE - functions that runs as soon as it is defined, it is a design pattern which is also known as a SELF-executing anonymous function and contains two major parts
// It's a common JavaScript pattern that executes a function instantly after it's defined. Developers primarily use this pattern to ensure variables are only accessible within the scope of the defined function 

(function(){
    console.log('IIFE Test')
})();

// practical Sample
let iifeTest = (function ageCalc(a,b) {
      return a - b
})(2022, 1990);
console.log(iifeTest); // 32

(function(x,y) {
    return console.log(x + y);    
})(10,5); // 15

(function(a,b){
    return console.log(a + b) ;
})(10,20);

// Challenge - Use IIFE to output your name in the console
(function (firstName){
    console.log(`My Name is ${firstName}`)
})("Raymond")


//  Arrow functions
// normal
let arrowTest = function(x){
   return console.log('Ordinary function tesr to see if it works')
}
arrowTest()

// Arrow function
let arrowTest2 = () => {
    console.log('Arrow Test')
}
arrowTest2()

// calc test
let ageCalc = function(c,d){
    return d-c
}
console.log(ageCalc(1990,2022)) // 32

// arrow func
let ageCalc2 = (c,d) => d - c;
console.log(ageCalc2(1990,2022)) // 32


// functions to create object
function person(name, gender, race, age, isShort){
    this.name = name;
    this.gender = gender;
    this.race = race;
    this.age = age
    this.isShort = isShort
}

let person1 = new person('Raymond', 'male', 'Black', 32, false);
console.log(person1); // worked

// more properties can be added
person1.occupation = 'Software Developer';
console.log(person1);