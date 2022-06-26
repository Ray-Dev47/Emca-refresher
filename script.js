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