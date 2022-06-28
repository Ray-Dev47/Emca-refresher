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