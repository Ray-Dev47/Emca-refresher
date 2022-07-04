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




