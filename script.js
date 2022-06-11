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