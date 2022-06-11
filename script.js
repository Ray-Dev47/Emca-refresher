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