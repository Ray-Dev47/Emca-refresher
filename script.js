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
num2--;  // 59
let total = num1 + num2;
console.log(total);    // 110;

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
let ageCheck2  = 18;
let checkAns = (ageCheck2 >= 18) ? console.log('Yes qualified') : console.log('Not qualified')
console.log(checkAns)

if(ageCheck2 >= 18){
    console.log(`${true}, welcome`)
}else{
    console.log(`${false}, not qualified`)
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
let count = 1
function myFunction(){
    console.log(`Message outputed from a function`)
    console.log(`${count++} times to run`)
}

myFunction();
myFunction();
myFunction();

// 2.) 
function funcAdd(a){
    return a + 10
}
 console.log(funcAdd(20))  // 30