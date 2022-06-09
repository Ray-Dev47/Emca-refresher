

let num1 = 50;
let num2 = 60;
num1++; // 51
num2--;  // 59
let total = num1 + num2;
console.log(total);    // 110;

// Check if a number exist and also check if it is greater than 50

let isCheck = prompt('Please enter a number');
if(isCheck >= 50){
    alert(`${isCheck} exist and is greater than 50`)
}else{
    alert(`${isCheck} does not exist and is less than 50`)
}