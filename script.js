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
let quest = parseInt(prompt('How many Miles?')); 
if(quest){
    let factor = quest * 1.60934
    // console.log(factor) // works
    alert(`${quest} Miles is equal to ${factor} Kilometers`)     // also work
}

