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

// 1. create a array with different data types and  return the values of those data types
const ArrChal = [1, 'two', undefined, false, 34, null, 'Raymond', {test: 'One', score: 66}, [6,7]];
console.log(ArrChal[7].score)  // 66
console.log(ArrChal[8][1]) // 7


// 2 -- Update your array using various methods:
const theList = ['Lawrence','Svekis', true, 35, null, undefined, {test: 'One', score: 55}, ['One', 'Two']];

theList.shift();
theList.shift();
theList.shift();
console.log(theList)
theList.unshift('make me first')
console.log(theList.length); // 6
console.log(theList.indexOf(theList.score))

// splice removes old while adding new
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0,2, 'Raymond','mike')
fruits.splice(2,1, 'new')  // at position 2, remove 1 item
console.log(fruits);


// Slice - The slice() method returns selected elements in an array, as a new array. (count- backwards like 0,-1,-2......)
// The slice() method does not change the original array.
const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango","pear", "dates"];
const bestFruit = fruits2.slice(-6, -2);  // Banana, orange,lemon ,Mango
console.log(bestFruit);


// More on arrays --
// Array FindThe find() method returns the value of the first element that passes a test.

// The find() method executes a function for each array element.
// The find() method returns undefined if no elements are found.
// The find() method does not execute the function for empty elements.
// The find() method does not change the original array.
let nums = [1,2,4,6,7,3,45,12,23,45,8,10,16]
 function isHigest(high){
     return high > 6
}
console.log(nums.find(isHigest)) // 7  -first conditional to satisfy

// Challenge - Use - Transform your array with different methods , try to combine two arrays , Search an array with numbers and return the value that matches the find.

// Merge two arrays 
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const combineArr3 = array1.concat(array2);
console.log(combineArr3);

//1.) Array.prototype.copyWithin() - The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.

// e.g copy 0 to a (index i to a)
const arrWithin = ["a", "e", "i", "o", "u"];
console.log(arrWithin.copyWithin(0,2,3))  // ['i', 'e', 'i', 'o', 'u']


//2.) Array.prototype.entries() -- The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
const arrEntries = ['Ray', 'Lincoln', 'Idengeli'];
const arrEntriesAns = arrEntries.entries();
console.log(arrEntriesAns.next().value); // [0, 'Ray']
console.log(arrEntriesAns.next().value); // [1, 'Lincoln']


// 3.) Array.prototype.every()- Test if it satisfies every condition and returns a boolean
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

const ages = [32, 33, 16, 40];
// check if all are above 18
function isAbove18(isAdult){
    return isAbove18 > 18
}
console.log(ages.every(isAbove18)) // false

// Array.prototype.fill() 
// The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
let arrFill = ["R","a","y","m"];
// console.log(arrFill.fill("x",2)) // ['R', 'a', 'x', 'x'] // at position 2, fil with x till end
console.log(arrFill.fill("0", 1, 3))  // ['R', '0', '0', 'm'], fill with "0" at position 1 and end at position 3
// console.log(arrFill.fill(0))  // [0, 0, 0, 0]


// 4.) Array.prototype.filter()
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// filter words greater than 6
let lenFilter = words.filter(word => word.length> 6);
console.log(lenFilter); // ['exuberant', 'destruction', 'present']

// for words less than 6
function lenFilter2(isLess){
    return isLess.length < 6
}
console.log(words.filter(lenFilter2)) // ['spray', 'limit', 'elite']

// 5.) Array.prototype.find()
// The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

// to find elements greater than 7
const arrFind = [2,5,6,34,7,8,5,3,7,9,56,7,20,10]
function findGreaterthan7(isgreater){
    return isgreater > 7
}
console.log(arrFind.filter(findGreaterthan7))  // [34, 8, 9, 56, 20, 10]


//6.) Array.prototype.findIndex()
// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
// e.g Find the first element with a value over 18:

const findIdxArr = [5, 12, 8, 130, 44];
function isOver18(isOver){
    return isOver > 18
}
console.log(findIdxArr.findIndex(isOver18));  // 3  (which is 12, 130, 44);

// 7. ) Array.prototype.flat()  (to flatten subarrays to one)
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const arrFlat = [1,2,3,[4,5,6],[7,8]];
console.log(arrFlat.flat())

const arrFlat2 = [2,4,6,[[[7,9,10]]]];  // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arrFlat2.flat(3))  // [2, 4, 6, 7, 9, 10]


// 8.) Array.prototype.flatMap()
// The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.
const arrFlatMap = [1,3,4,6];
console.log(arrFlatMap.flatMap(x => [x * 2]));  // [2, 6, 8, 12] , flat and map at the same time

// 9.) Array.prototype.forEach()
// The forEach() method executes a provided function once for each array element.
// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.

const arrForEach = ['r','a',1,'y'];
function arrForEachTest(tests){
    // return 
    console.log(tests)
}
console.log(arrForEach.forEach(arrForEachTest))  // r a 1 y

// 10.) Array.from()
// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
const arrFrom = 'Ray'
console.log(Array.from(arrFrom))  //  ['R', 'a', 'y'];


// 11.) Array.prototype.includes()
// The includes() method returns true if an array contains a specified value.
// The includes() method returns false if the value is not found.
// The includes() method is case sensitive.

const arrIncludes = ['Ray','faith','Mike'];
console.log(arrIncludes.includes('Ziru')) // false ----->  ziru is not part of Idengeli Family

// 12.) Array.prototype.indexOf()
// The indexOf() method returns the first index (or Position) at which a given element can be found in the array, or -1 if it is not present.

const arrIndexOf = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
console.log(arrIndexOf.indexOf('limit')); // 1
console.log(arrIndexOf.indexOf('exuberant'));  // 3
console.log(arrIndexOf.indexOf('none'));  // -1

// 13.) Array.isArray()
// The Array.isArray() method determines whether the passed value is an Array.
const isArrTest = [2,3,5];
console.log(Array.isArray(isArrTest))  // true

// 14.) Array.prototype.join()
// The join() method creates and returns a new string (Note) by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

const arrJoin1 = ['R','a','y'];
const arrJoin2 = ['m','o','n','d'];
const arrJoin = arrJoin1.join(); // R,a,y
console.log(arrJoin);
// add dash 
console.log(arrJoin1.join('-')) //  R-a-y


//15.) Array.prototype.keys() 
// The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
const arrkeys = ['Ray', 'Lincoln', 'samuel', 'idengeli'];
const iterate = arrkeys.keys();

for (const key of iterate){
    console.log(key)  // 
}

// expected output: 0
// expected output: 1
// expected output: 2
// expected output: 4

// 16.) Array.prototype.lastIndexOf()
// returns the last index at which a given element can be found in the array or -1 if its not present. it is searched backwards 

const arrFindLastIndex = ['rice', 'tea', 'okro', 'rice', 'yam'];
console.log(arrFindLastIndex.lastIndexOf('rice'));  // 3  
console.log(arrFindLastIndex.lastIndexOf('tea'))// 1

// 17.) Array.prototype.map()
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const arrMap = [1,2,3];
const arrMapNew = arrMap.map(myFunc)

function myFunc(z){
    return z* 20
}
console.log(arrMapNew) // [20, 40, 60]'

// Array.prototype.pop()  **** understood removes from the end 
// Array.prototype.push()  **** understood The push() method adds one or more elements to the end of an array and returns the new length of the array.
// Array.prototype.shift() **** understood removes first element

// 18.) Array.prototype.reverse()
// The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

const arrReverse = ['one','two','three','four'];
console.log(arrReverse.reverse()) //  ['four', 'three', 'two', 'one']

// 19.)  Array.prototype.slice()
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
const arrSplice = ['army','police','navy', 'air force', 'NSCDC']
console.log(arrSplice.slice(2))// ['navy', 'air force', 'NSCDC']
console.log(arrSplice.slice(3))  //  ['air force', 'NSCDC']
console.log(arrSplice.slice(1,-2)) // ['police', 'navy']


// 20.) Array.prototype.some()
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

// e.g check if an element is even
let arrSome = [1,2,3,3,4,5,5,6,7,8];
function IsEven(test){
    return test % 2 === 0
}
console.log(arrSome.some(IsEven))// true

// 21.)  Array.prototype.sort()
// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

const arrSort = ['elephant','ball','cat', 'dog','apple', ];
console.log(arrSort.sort());  //  ['apple', 'ball', 'cat', 'dog', 'elephant'];
console.log(arrSort.reverse()) // ['elephant', 'dog', 'cat', 'ball', 'apple']


// 22.) Array.prototype.splice()
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]


// 23.) Array.prototype.toLocaleString()
// converts array to string
const arrToString = ['Jan', 'March', 'April', 'June'];
console.log(arrToString.toLocaleString());  // Jan,March,April,June

// 24.) Array.prototype.unshift()
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

// 25.) Array.prototype.values() ---> returns the arrayValues
// The values() method returns a new array iterator object that contains the values for each index in the array.
const arrValueOf = ["Banana", "Orange", "Apple", "Mango"];
const arriterator = arrValueOf.values();

for (const value of arriterator){
    console.log(value)
}
// expected output: "Banana"
// expected output: "Orange"
// expected output: "Apple"
// expected output: "Mango"


// extra filter challenge
// use filter to create a new array with numbers greater than 75 and output in console
const arrFilter = [77,44,2,162,18,244,];
function fiterCheck(isOver75){
    return isOver75 > 75
}
console.log(arrFilter.filter(fiterCheck)); // [77, 162, 244]



// Loops 
// for statement
// A for loop repeats until a specified condition evaluates to false. 
// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement
for(idx = 0; idx <= 10; idx++){
    if(idx === 5){
        console.log("Break at 5");
        break;   // 1 to 4, stop and break
    }
    console.log(idx); // counts 0 -10
}


// create an array that contains objects created dynamically using a loop. output the content into the console
// const i = [{}]
for(i = 1; i <= 9; i++){
    let status = "";
     if(i % 2 === 1){
        status = true
     } else {
        status = false
     }
    console.log([`Name: "Lesson ${i}", status: ${status}`])  // works but not as array object
}

// correction
const myCorrection = [];
for(idx = 0; idx <= 9; idx++){
    let stat = idx%2 ? true : false;
    let temp = {name: `Lesson ${idx}`, status:stat};
    myCorrection.push(temp)
}
console.log(myCorrection)

// 2 - Use filter to create a new array with the only items that have a value of true

// function filterTrue(){
//     return myCorrection === "true"
// }
// console.log(Correction.filter(filterTrue));
const newFilter = myCorrection.filter(function (el){
    return el.status === true
})
console.log(newFilter)  // correct!!


// Loop object and array data

const myName = ['Raymond'];
function forEachTest(tryIt){
  console.log(tryIt)
}
console.log(myName.forEach(forEachTest)) // Raymond

// Extra
// Build a new array of values from existing that have all the numbers multiplied by 50.
// ** Use map to return values of array items that are objects using the previous array of lessons 
const arrTask1 = [1,2,4,5];
function arrtimes(para) {
    return para * 50
}
console.log(arrTask1.map(arrtimes)); // [50, 100, 200, 250]