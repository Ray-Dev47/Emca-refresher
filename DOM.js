// DOM represents the documents as nodes and object

// The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree. With them, you can change the document's structure, style, or content.
console.dir(document);
document.querySelector('h1').innerHTML = 'Test to Change Header  One ';

// challenge - Select element from the HTML and update the backround color
console.log(document.getElementById('myID').innerHTML); // This is the first DIV
// document.querySelector('.first span').style.backgroundColor = "yellow";
// document.querySelector('span').innerHTML = 'Span change'
// document.querySelector('.first span').style.backgroundColor = 'red';
// document.querySelector('.first span:last-child').style.backgroundColor = 'blue'
// document.querySelector('li:nth-child(3)').style.backgroundColor = 'crimson'
// document.querySelector('li:first-child').style.backgroundColor = 'green'

// Selecting alll element
// document.querySelectorAll('.first').style.backgroundColor = 'orange'
// document.querySelector('p').innerHTML = 'red'

// target all the span
const allSpan = document.getElementsByTagName('span');
for (i = 0; i < allSpan.length; i++) {
	allSpan[i].style.color = 'red';
	// allSpan[i].innerHTML = 'changed'
	// to add to the existing text
	allSpan[i].textContent = i + 1 + ' added text';
	console.log(allSpan[i]);
}
console.log(allSpan.attributes);

// Element manipulation
// innerContent, innerText, innerHTML are used to update and manupulate the DOM

// Challenge--
// update all list items with ids in sequence and count. Get class attribute output to console
// Remove the first div with class of pickme
let liChall = document.querySelector('.second').getElementsByTagName('li');
// for (let index = 0; index < liChall.length; index++) {
//     // const element = liChall[index];
//     // console.log(element)
//     liChall[index].innerHTML = `List item #${index + 1}` // correct!!!!
// }

// wrong
// liChall.forEach(function(el){
//     el.innerHTML = `List item #${el + 1}`
// })
// console.log(liChall)
// correction with forEach
// liChall.forEach(function(el, cnt){
//     el.id = 'li' + cnt;
//     el.textContent = 'List item #' + cnt;
//     console.log(item.getAttribute('class'))
// })

const removePickMe = document.getElementById('pickMe');
removePickMe.removeAttribute('id');
console.log(removePickMe);

let head = document.querySelector('h1');
head.setAttribute('id', 'red');
head.innerHTML = 'try';
console.log(head);

const button = document.querySelector('button');
button.setAttribute('name', 'Raymond');
button.style.backgroundColor = 'red';
// button.removeAttribute('name')
// button.remove();
console.log(button);

const linkTry = document.querySelectorAll('a');
linkTry.forEach(function (el) {
	console.log(el.getAttribute('href'));
	el.setAttribute('href', 'http://google.com'); // works, routes to google when clicked
});
// console.log(linkTry())

// Element Classses
// Here we can: replace , remove, toggle & add classes
// Check if class exist in classList of element

// Element.classList
// The Element.classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list.
let tag = document.createElement('h1');
tag.className = 'header1'; // adds a classname
tag.innerText = 'Header 1';
console.log(tag.outerHTML); // <h1 class="header1">Header 1</h1>

// to remove and add classname
tag.classList.remove('header1');
tag.classList.add('headerOne'); // changed
console.log(tag.outerHTML); // <h1 class="headerOne">Header 1</h1>

//  to toggle (btn event listener can be used to achieve this)
tag.classList.toggle('headerOneToggle');
console.log(tag.outerHTML); // <h1 class="headerOne headerOneToggle">Header 1</h1>

// to check a class exist in classList of element
console.log(tag.classList.contains('headerOne')); // true

// to add multiple classses
tag.classList.add('one', 'two', 'three');
console.log(tag);

// to remove multiple classes, use same method as above

// to replace classes
tag.classList.replace('one', 'one1');
console.log(tag);

//add or remove multiple classes using spread syntax
const spreadTest = ['val1', 'val2', 'val3'];
tag.classList.add(...spreadTest);
console.log(tag);
tag.classList.remove(...spreadTest);

// element children and traversing
// Element.children/ Javascript Children -- returns a live HTMLCollection which contains all of the child elements of the element upon which it was called.

// what we will be doing --
/**
 * Get element childNodes
 * Element children
 * parentElement
 * parentNode
 * Siblings
 * Next and previous Siblings
 */

let childTest = document.querySelector('div.first');
console.log(childTest.parentNode, 'parentNode Test'); // returns the parent
console.log(childTest.childNodes, 'childnodes Test'); // returns the children
console.log(childTest.children, 'children Test'); // returns the child elements
console.log(childTest, 'child test');
// console.log(sibling, 'child test');
console.log(childTest.nextSibling, 'next Siblings test');
console.log(childTest.previousElementSibling, 'previousElement Siblings test');
console.log(childTest.previousSibling, 'previous Siblings test');

for (let i = 0; i < childTest.children.length; i++) {
	console.log(childTest.children[i]);
	console.log(childTest.children[i].textContent, 'loop');
}
for (let i = 0; i < childTest.childNodes.length; i++) {
	console.log(childTest.childNodes[i]);
	console.log(childTest.childNodes[i].textContent, 'loop');
}

// note forEach does not work with children but with childNodes
childTest.childNodes.forEach(function (el, cnt) {
	console.log(el, 'el test');
}); // works

// Element style updates -- allows us update the styling using DOM
const styleTask = document.getElementById('myID');
styleTask.style.color = 'blue';
styleTask.style.fontSize = '60px';
styleTask.style.display = 'block';
// styleTask.style.display = 'none' // hides the header
styleTask.style.border = '5px dotted red';

// Challenge -

// DOM Create Element -- In an HTML document, the document.createElement() method creates the HTML element specified by tagName, or an HTMLUnknownElement if tagName isn't recognized.

/**
 * Objective:
 * Create elements with CreateElement
 * Create text nodes with createTextNode
 * Append to other element with append Child
 */

// e.g to create a new <div> and inserts it before the element with the ID "div1".

let newDiv = document.createElement('div');
// let content =  document.createTextNode('Hello this is a content created here');
// let combineAll = newDiv.appendChild(content);

// now to add to DOM
let currentDiv = document.getElementById('div1');
document.body.insertBefore(newDiv, currentDiv);

// console.log(combineAll)

// Another sample
// let rayDiv = document.createElement('div')
// rayDiv.id = 'ray'
// rayDiv.style.backgroundColor = 'crimson'
// rayDiv.style.color = '#fff';
// rayDiv.style.padding = '30px'
// let rayContent = document.createTextNode('Create content example 2');

// let totalRay = rayDiv.appendChild(rayContent);
// document.body.appendChild(rayDiv);

// Event listeners
// The addEventListener() sets up a function that will be called whenever the specified event is delivered to the target.
// We also have remove listener  removeEventListener();

const eventTest = document.getElementById('testID');
eventTest.style.cursor = 'pointer';
eventTest.addEventListener('click', function () {
	console.log('Event H1 Clicked!!');
});

// another way is to invoke a function and call it
eventTest.addEventListener('click', myFunc);
function myFunc() {
	console.log('method 2');
}

// we can analyze the different event we have in the console for h1 above,
console.dir(eventTest); // options for different events is shown here.

// Challenge 1 --> Add the ability to click on elements with class = listItem and toggle the class red to the element
let addClass = document.querySelectorAll('.listItem');

for (let i = 0; i < addClass.length; i++) {
	addClass[i].style.cursor = 'pointer';
	addClass[i].addEventListener('click', function () {
		addClass[i].classList.toggle('red');
	});
}

// DOM challenge 2  - Image popup
// add a popup image when any image on the page is clicked. popup should show the full size image from the web link

const imgOne = document.getElementById('img-1');
const imgTwo = document.getElementById('img-2');
const imgThree = document.getElementById('img-3');
const btnOne = document.getElementById('btn_1');
const btnTwo = document.getElementById('btn_2');
const btnThree = document.getElementById('btn_3');

btnOne.addEventListener('click', function () {
	if (imgOne.style.width === '100px') {
		imgOne.style.width = '500px';
	} else {
		imgOne.style.width = '100px';
	}
});
btnTwo.addEventListener('click', function () {
	if (imgTwo.style.width === '100px') {
		imgTwo.style.width = '500px';
	} else {
		imgTwo.style.width = '100px';
	}
});
btnThree.addEventListener('click', function () {
	if (imgThree.style.width === '100px') {
		imgThree.style.width = '500px';
	} else {
		imgThree.style.width = '100px';
	}
});

// correction
// const imgList = document.querySelectorAll('img');
// for(let i = 0; i < imgList.length; i++){
// 	imgList[i].addEventListener('click', function(){
// 		console.log(this.src);
// 		window.open(this.src,"myImage","resizable=yes,width=500,height=500");
// 	});
// }

// Challenge-two - list Item
// Show a list of items and give the ability to add new items to the list by submitting content from an input form.
// Bonus - if you check that the input field has content with length of more than 3 characters.
// You can use this HTML starter code
let ul = document.getElementById('listParent');
let textArea = document.getElementById('textArea');
let submit = document.getElementById('submit');
var addButton = document.getElementsByTagName('button')[0];
console.log(addButton);

submit.addEventListener('click', function () {
	let value = textArea.value;
	let li = document.createElement('li');
	let editButton = document.createElement('button');
	// let value = event.target.value
	li.textContent = value;
	li.appendChild(editButton);
	ul.appendChild(li);

	textArea.value = '';
	// e.preventDefault();
	if (value == '') {
		alert('empty field!, please input something');
		ul.removeChild(li);
		return false;
	} else {
		return true;
	}
	// if(value.length >= 3){
	// 	alert('greater than 3 character entered')
	// }
});

// Challenge - list items advanced
// add to list items
// Make existing items click and toggle line strike
// add x to item to allow for removal from the list   **starter code provided**
let advList = document.getElementById('advList');
let advInput = document.getElementById('advInput');
// let delItem = document.getElementById('advList').querySelectorAll('.remove')
// console.log(delItem)
// let advBtn = document.getElementById('advBtn');

// adding button if i like
// advBtn.addEventListener('click', function(){
// console.log('clicked')
// let advValue = advInput.value
// let advLi = document.createElement('li');
// advLi.textContent = advValue ;
// advList.appendChild(advLi);
// advInput.value = ''

// })

let eachList = document.getElementById('advList').getElementsByTagName('li');
for (let idx = 0; idx < eachList.length; idx++) {
	eachList[idx].style.cursor = 'pointer';
	eachList[idx].style.padding = '10px';

	eachList[idx].addEventListener('click', function myToggle() {
		// eachList[idx].classList.toggle('adv-css')
		// or below
		// this.classList.toggle('adv-css');
		let toggleClass = this.classList.toggle('adv-css');
		if (toggleClass) {
			let span = document.createElement('span');
			span.textContent = '    X';
			span.addEventListener('click', function () {
				this.parentElement.remove();
			});
			this.appendChild(span);
		} else {
			this.getElementsByTagName('span')[0].remove();
		}
	});
}

advInput.addEventListener('keypress', function (e) {
	// console.log(e.key, e.keyCode, 'pressed')
	if (e.keyCode === 13) {
		let advValue = advInput.value;
		if (advValue === '') {
			alert('empty field!!');
		} else {
			let advLi = document.createElement('li');
			advLi.textContent = advValue;
			advList.appendChild(advLi);
			advInput.value = '';
			let eachList = document
				.getElementById('advList')
				.getElementsByTagName('li');
			for (let idx = 0; idx < eachList.length; idx++) {
				if (advValue !== '') {
					eachList[idx].style.cursor = 'pointer';
					eachList[idx].style.padding = '10px';

					eachList[idx].addEventListener('click', function () {
						// eachList[idx].classList.toggle('adv-css')
						let toggleClass = this.classList.toggle('adv-css');
						if (toggleClass) {
							let span = document.createElement('span');
							span.textContent = '    X';
							span.addEventListener('click', function () {
								this.parentElement.remove();
							});
							this.appendChild(span);
						} else {
							this.getElementsByTagName('span')[0].remove();
						}
					});
				}
			}
		}
	}
});

// tutorial correction

// tutorial correction
// const mainList = document.querySelector('ul');
// const inputEl = document.querySelector('input');
// const clicker = document.querySelector('button');

// clicker.addEventListener('click', function(){
// 	if(textTemp.value >= 3){
// 		let li = document.createElement(li);
// 		let textTemp = document.createTextNode(inputEl.value);
// 		li.appendChild(textTemp);
// 		mainList.appendChild(li);
// 	}
// })

// Project next - Random color changer
// add a button that will change the body background
const bgBtn = document.getElementById('bgBtn');
let randColor = document.querySelector('.randColor');

bgBtn.addEventListener('click', function () {
	// let colorChange = ['red','blue', 'yellow','crimson','gray','purple']
	// let oneColor = colorChange[Math.floor(Math.random()* colorChange.length)]
	// 	randColor.style.backgroundColor = oneColor   // worked!!!

	// to try hex code
	const randomHexColorGenerator = () => {
		let hexColor = (Math.random() * 0xfffff * 1000000).toString(16);
		return '#' + hexColor.slice(0, 6);
	};
	document.body.style.backgroundColor = randomHexColorGenerator(); // worked
	randColor.style.backgroundColor = randomHexColorGenerator(); // worked
});

// EVENT OBJECT
// All event objects in the DOM are based on the Event Object. e.g. mouseEvent and keyboardEvent have access/belong to their mouseEvent object and keyboardEvent objects.

// JS Click event object
// The target property of the event interface is a reference to the object that dispatched the event  ....e.g the e.target
document.querySelector('div ').addEventListener('click', function (e) {
	console.log(e);
	console.log(e.type);
	console.log(e.target);
});

const eventObject = document.getElementById('eventObject');
eventObject.addEventListener('click', function (eventTest) {
	console.dir(eventTest); // shows pointer event and the various methods available
	// console.log(eventTest.target)
	// console.log(eventTest.target)
});

// ************* KEYPRESS EVENT *******************
// keypress challenge --
// Add a key event listener for arrow key presses and outputting it into an element along with the keycode in ()
const keyEvent = document.getElementById('keyEvent');
keyEvent.addEventListener('keydown', function (e) {
	// console.log('key pressed')
	// console.log(e)
	console.log(e.key, e.keyCode);
	// console.log(e.keyCode);
});

// Mouse Events
// Are fired when a pointing device is moved onto the element that has the listener attached or onto one of its children

// The mouseout event fired when a pointing device(usually a mouse) is moved off the element that as the listener attached or off its children.

// Self challenge

// const mouseHead = document.getElementsByClassName('mouseHead, li')
// console.log(mouseHead)

const mouseHover = document.querySelector('.mouseHead');
// console.log(mouseHover)

mouseHover.addEventListener('mouseleave', function () {
	// mouseHover.appendChild(li)
	console.log((mouseHover.style.backgroundColor = 'red'), 'mouse moved'); // understood
	// for(let idx = 0; idx < mouseHover.length; idx++){

	// }

	// e.target.style.backgroundColor = 'red'
});
// other events we have are: mousedown, mouseup,mousemove,mouseover, mouseout,mouseenter,mouseleave

// Mouse Challenge - Highlight list item to red text color when mouse is hovered on the list item. Remove the highlight once off.
// challenge completed via codepen
{
	/* <ul>
        <li>My Item 1</li>
        <li>Another Item</li>
        <li>My Item 2</li>
        <li>My Item 3</li>
    </ul> */
}

// .red{
// 	color: blue;
//   }

// 	const list = document.querySelectorAll('li');
//  for(let i = 0; i < list.length; i++){
//    list[i].style.cursor = "pointer";
//      list[i].addEventListener('mouseover', function(){
//        // this.style.backgroundColor = 'red'
//        list[i].classList.add('red')
// 	   list[i].addEventListener('mouseout', function(){
//          list[i].classList.remove("red")
//      } )
// })
//    }

// EVENT BUBBLING AND CAPTURING
// can be useful when you have two events on the same elements
// it is needed when an event occurs in an element inside another element, and both elements have registered a handle for that event.
// with bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.
// with capturing, the event is first captured by the outermost element and propagated to the inner elements.

// We can use the addEventListener(type,listener,useCapture) to register event handlers for in either bubbling (default) or capturing mode. To use the capturing model pass the third arguement as true.

// Almost all events bubble.----->
// Event bubbling is a method of event propagation in the HTML DOM API when an event is in an element inside another element, and both elements have registered a handle to that event.
// When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
// Let’s say we have 3 nested elements FORM > DIV > P with a handler on each of them:
// read  more on MDN

// Useful JS methods and code snippets

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       1.) Number Methods:     XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// Number is a JS type and primitive wrapper object used to represent and manipulate numbers like 37 or -9.25.
// in numbers we look at parseInt, tofixed and Number to convert variables to number
// e.g
let myNum = 100.4565;
let myNum2 = '200';
// to roundoff myNum to 2 deceimal places and to convert myNum2 to number
console.log(myNum.toFixed(2)); // 100.46

// to convert string to number
console.log(parseInt(myNum2)); // 200
// or
console.log(Number('350')); // 350

// **** Number.isFinite()  -- checks if number passed is a finite number(i.e can be measured)
console.log(Number.isFinite(2 / 0)); // false
console.log(Number.isFinite(4 / 2)); // true cos it can be measured

//******* */ Number.isInteger() -- checks if number passed is an integer (Note intergers are whole numbers without decimals or fractions)
function testIfInteger(x, y) {
	let ans = x / y;
	if (Number.isInteger(ans)) {
		return 'Yes it is an integer';
	} else {
		return 'It is not an integer';
	}
}
console.log(testIfInteger(3.5, 3)); // its not an integer

//******* */ Number.isNaN() - determines whether the passed value is NaN and its type is Number, it is a more robust version of isNaN()
function testifNAN(x) {
	if (Number.isNaN(x)) {
		return `${x} is NAN`;
	} else {
		return `${x} is not NAN`;
	}
}
console.log(testifNAN('100E'));
console.log(testifNAN(NaN));

// ******** Number.isSafeInteger() -checks whether the provided value is a number that is a safe integer
// The safe integers consist of all integers from -(253 - 1) to 253 - 1, inclusive (±9,007,199,254,740,991). A safe integer is an integer that:
// can be exactly represented as an IEEE-754 double precision number, and
// whose IEEE-754 representation cannot be the result of rounding any other integer to fit the IEEE-754 representation.
// For example, 253 - 1 is a safe integer: it can be exactly represented, and no other integer rounds to it under any IEEE-754 rounding mode. In contrast, 253 is not a safe integer: it can be exactly represented in IEEE-754, but the integer 253 + 1 can't be directly represented in IEEE-754 but instead rounds to 253 under round-to-nearest and round-to-zero rounding.
console.log(Number.isSafeInteger(5)); // true
console.log(Number.isSafeInteger(5.567 * 45)); // true

// ********** Number.parseFloat()  - method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN
function circumference(r) {
	if (Number.isNaN(Number.parseFloat(r))) {
		return 0;
	}
	return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference('4.567abcdefgh'));
// expected output: 28.695307297889173

console.log(circumference('abcdefgh'));
// expected output: 0

// *************** Number.parseInt() - Number.parseInt() method parses a string argument and returns an integer of the specified radix or base.
function testParseInt(x, base) {
	const parsedAns = Number.parseInt(x, base);
	if (Number.isNaN(parsedAns)) {
		return 0;
	} else {
		return parsedAns * 20;
	}
}
console.log(testParseInt('0xF', 4)); // 0
console.log(testParseInt('14', 4)); //20

// Number.prototype.toExponential()  -- The toExponential() method returns a string representing the Number object in exponential notation.
function expo(x, f) {
	return Number.parseFloat(x).toExponential(f);
}
console.log(expo(123456, 2));
// expected output: "1.23e+5"
console.log(expo('123456'));
// expected output: "1.23456e+5"
console.log(expo('oink'));
// expected output: "NaN"

// Number.prototype.toFixed()- this method formats a number using fixed-point notation. (works like rounding off decemals)
let testRay = 56.789645;
console.log(testRay.toFixed(2)); //56.79
function testToFixed(x) {
	return Number.parseFloat(x).toFixed(3);
}
console.log(testToFixed(123.7889)); // 123.789

// ***** toLocaleString() is a Number method that is used to convert a number into a locale-specific numeric representation of the number (rounding the result where necessary) and return its value as a string. note: the locales differ by countries
const testLocaleString = 232000;
console.log(testLocaleString.toLocaleString()); // 232,000

const d = new Date();
let text = d.toLocaleString();
console.log(text); // 10/3/2022, 2:28:40 PM

// number.toPrecision() --  method returns a string representing the Number object to the specified precision.
function testPrecitionTest(x) {
	return x.toPrecision(4);
}
console.log(testPrecitionTest(2345.7789)); // 2346

// Number.prototype.toString() -- The toString() method returns a string representing the specified Number object.
function hexColour(c) {
	if (c < 256) {
		return Math.abs(c).toString(16);
	}
	return 0;
}
console.log(hexColour(233));
// expected output: "e9"
console.log(hexColour('11'));

//   Number.prototype.valueOf()  -- The valueOf() method returns the wrapped primitive value of a Number object.
const numObj = new Number(42);
console.log(typeof numObj);
// expected output: "object"

const num = numObj.valueOf();
console.log(num);
// expected output: 42

console.log(typeof num);
// expected output: "number"

// JS STRING METHODS - allows us to manipulate and update string values.
// String.prototype.trim() - this method removes white space from a string and returns a new string without modifying the original string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).

const twuale = '    boss i hail     ';
console.log(twuale); // returns a space
console.log(twuale.trim()); // works

// String.prototype.toLocaleUpperCase() -- The toLocaleUpperCase() method returns the calling string value converted to upper case, according to any locale-specific case mappings.
const testUpper = 'testupper';
console.log(testUpper.toLocaleUpperCase()); // TESTUPPER

// The toLocaleLowerCase() method returns the calling string value converted to lower case, according to any locale-specific case mappings.
const testLower = 'TESTLOWER';
console.log(testLower.toLocaleLowerCase()); // testlower

// string.prototype.split() -- this takes a pattern and divides a string into an ordered list of substrings by searching for the pattern, puts these substrings into an array and returns the array
const testSplit = 'The quick brown fox jumps over a lazy dog';
// to get a single word
const word = testSplit.split(' ');
console.log(word[4]); //  jumps
console.log(word[2]); //  brown

// to get a single character e.g 'w'    // note space is counted too
const chars = testSplit.split('');
console.log(chars[13]); // w -correct!!
//  to copy to testSplit into another variable
const newSplit = testSplit.split();
console.log(newSplit); // 'The quick brown fox jumps over a lazy dog'

// syntax
// split()
// split(separator)
// split(separator, limit)

const monthString = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec';
const newMonth = monthString.split(' ');
console.log(newMonth); // ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

let text2 = 'How are you doing today?';
const myArray = text2.split(' ');
console.log(myArray); // ['How', 'are', 'you', 'doing', 'today?']

// ******** String.prototype.slice() - extracts a certian section of the string and returns a new one without modifying the original string.
const testSlice = 'armagedon';
const newSlice = testSlice.slice(4);
console.log(newSlice); // gedon
console.log(text2.slice(3, 15)); // are you doi

//  ****************** String.prototype.replace() -replace a new string with one, some or all matches of a pattern replaced by a replacement or new one.
// The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.
const testReplace = 'Raymond is a boy';
console.log(testReplace.replace('boy', 'man')); // Raymond is a man

// ********* String.prototype.lastIndexOf() - this methods searches the entire string and returns the index of th LAST occurence of the specified substring.
const testLastIndex =
	'If he say na fine boy him be, then na fine boy him be na';
let searchParam = 'boy';
console.log(
	`the last index wey ${searchParam} appear from the end na ${testLastIndex.lastIndexOf(
		searchParam
	)}`
);
// output: the last index wey boy appear from the end na 43.

// noted that they are zero indexed:                 also it is also case sensitive.
// 'canal'.lastIndexOf('a');     // returns 3
// 'canal'.lastIndexOf('a', 2);  // returns 1
// 'canal'.lastIndexOf('a', 0);  // returns -1
// 'canal'.lastIndexOf('x');     // returns -1
// 'canal'.lastIndexOf('c', -5); // returns 0
// 'canal'.lastIndexOf('c', 0);  // returns 0

// ********** String.prototype.indexOf() ---  searches the entire string and returns the index of th FIRST occurence of the specified substring.
console.log(
	`the last index wey ${searchParam} appear from the end na ${testLastIndex.indexOf(
		searchParam
	)}`
);
// output: the last index wey boy appear from the end na 18.

// there are tons of other string method on MDN

//  *******************                  JS MATH METHODS              **********************************
// for this sake we shall
// generateRandom Numbers, roundup, rounddonw, rounding.....
// Math is an inbuilt object that has properties and methods for mathematical constants and functions.
// Note: it is not a function object.

// Math works with the Number type. and not with BigInt (BigInt is a primitive wrapper object used to represent and manipulate primitive bigint values — which are too large to be represented by the number primitive.)

// for Math propertes, we have : Math.E(euler constant), Math.LN2 (Natural logarithm of 2), Math.LN10(Natural logarith of 10),  Math.PI
// Ratio of a circle's circumference to its diameter; approximately 3.14159. e.t.c.

// For Math Methods: they are static

// For round off, we have Math.floor & Math.ceil
// ***************************** Math.floor - rounds off the highest integer (integer means whole number without decimal) less than or equal to a given number
console.log(Math.floor(5.678)); // 5
console.log(Math.floor(5.45)); // 5
console.log(Math.floor(5)); // 5
console.log(Math.floor(-6.08)); // -7

// ***************************** Math.ceil - rounds off the lowest integer greater than or equal to a given number
console.log(Math.ceil(5.78)); // 6
console.log(Math.ceil(5.4005)); // 6
console.log(Math.ceil(3.1)); // 4
console.log(Math.ceil(-8.3)); // -8

// **************************** Math.random() - returns a random floating point or pseudo random number that is greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.

console.log(Math.floor(Math.random() * 10)); // randomly selects number between 1 & 10
function testRandom(x) {
	return Math.floor(Math.random() * x);
}
console.log(testRandom(4)); // worked

// *************************************** ARRAY INCLUDES AND TENARY OPERATORS ************************
const testIncludes = ['ray', 'mike', 'ene'];
console.log(testIncludes.includes('ziru')); // false

// Tenary
function testTenary(val) {
	return val ? true : false;
}

console.log(testTenary(null)); // false
console.log(testTenary(4)); // true

// Challenge - Genrate 50 random numbers from 1 to 50 excluding from the list 10,15,7,1,4,2,5

// const ranNumber = document.getElementById('ranNumber')
// ranNumber.addEventListener('click', function(){
// 	// console.log('clicked')
// 	const allArr = [1,2,3,4,6,6,7,8,9,10,11,12,13,14,15]
// 	const excludedArr = [10,15,7,1,4,2,5,30];
// 	if(!allArr.includes(excludedArr)){
// 		return  console.log(Math.ceil(Math.random() * (allArr.length)))
// 	    // console.log(ran1)
// 	}else{
// 		console.log('not among')
// 	}

// })
const ranNumber = document.getElementById('ranNumber');
ranNumber.addEventListener('click', function () {
	// console.log('clicked')
	function generateRandom(min, max, exclude) {
		let random;
		while (!random) {
			const x = Math.floor(Math.random() * (max - min + 1)) + min;
			if (exclude.indexOf(x) === -1) random = x;
		}
		return random;
	}
	console.log(generateRandom(1, 20, [0, 15, 7, 1, 4, 2, 5, 30]));
});

// instructor correction
// const ranNumber2 = document.getElementById('ranNumber2')
// ranNumber2.addEventListener('click', function(){
// 	const excludedNumbers = [0,15,7,1,4,2,5,30];
// function genRandom(min,max){
// 	let numRan = Math.floor(Math.random() * (max-min +1)) + min;
// 	let resRan = excludedNumbers.includes(numRan) ? genRandom(min,max): numRan;
// 	return resRan

// }
// for(let x = 0; x<20; x++){
// 	let min = 1;
// 	let max = 20;
// 	let numRan = genRandom(min,max);
// 	console.log(numRan)
// }

// })

// challenge - Create an array and randomly on page load output an item from the array on the screen.
const ArrMsgBtn = document.getElementById('ArrMsgBtn');

ArrMsgBtn.addEventListener('click', function () {
	let msg = [
		'Hello',
		'Good Morning',
		'Good Afternoon',
		'Good Evening',
		'Merry Christmas',
		'How far',
		'happy Val',
	];
	let myrandom = Math.floor(Math.random() * msg.length);
	//   console.log(myrandom)

	function showMsgOnHTML() {
		document.getElementById('arrMsg').innerHTML = msg[myrandom];
	}

	showMsgOnHTML();
});

// challenge - Create an array and randomly on page load output an item from the array on the screen.
// const ArrMsgBtn = document.getElementById('ArrMsgBtn');

// ArrMsgBtn.addEventListener('click', function(){
//       let msg = ['Hello', 'Good Morning', 'Good Afternoon', 'Good Evening', 'Merry Christmas', 'How far', 'happy Val'];
//       let myrandom = Math.floor(Math.random() * msg.length)
//     //   console.log(myrandom)

//       function showMsgOnHTML(){
//          document.getElementById('arrMsg').innerHTML = msg[myrandom]
//       }

//       showMsgOnHTML()
// })

// JavaScript DOMContentLoaded - is an vent that fires when the initial HTML document has been completely loaded and parsed without waiting for stylesheets, images and subframes to finish loading. e.g
window.addEventListener('DOMContentLoaded', function (e) {
	console.log('DOM full loaded and parsed');
});

// challenge  3- Using only JavaScript create an element that moves with key presses. Create the element when DOM content loaded.
// const el = document.querySelector('.main')
// const player = {
//     // el: document.querySelector('.main'),
//     x: 200,
//     y: 150,
//     speed: 2

// }
// document.addEventListener('DOMContentLoaded', build)
// document.addEventListener('keydown', function(e){

//     if(e.keyCode === 37){player.x -= player.speed;}
//     if(e.keyCode === 39){player.x += player.speed;}
//     if(e.keyCode === 40){player.x += player.speed;}
//     if(e.keyCode === 38){player.x -= player.speed;}
//     // console.log(e.keyCode)

//     player.el.style.left = player.y + "px";
//     player.el.style.top = player.x + "px";
// })
// function build(){
//     player.el = document.createElement('div')
//     player.el.style.position = 'absolute'
//     player.x = 100
//     player.y = 100
//     player.el.style.width = '100px'
//     player.el.style.height = '100px'
//     player.el.style.backgroundColor = 'yellow'

//     document.body.appendChild(player.el)
// }

// JAVASCRIPT DATES -- it is an object
// several ways to create date object
const today = new Date();
const birthday = new Date('December 17, 1995 03:24:00'); // DISCOURAGED: may not work in all runtimes
const birthday2 = new Date('1995-12-17T03:24:00'); // This is ISO8601-compliant and will work reliably
const birthday3 = new Date(1995, 11, 17); // the month is 0-indexed
const birthday4 = new Date(1995, 11, 17, 3, 24, 0);
const birthday5 = new Date(628021800000); // passing epoch timestamp

// toString method '
const date = new Date();
console.log(date.toString()); // Sat Oct 08 2022 16:10:34 GMT+0100 (West Africa Standard Time)
console.log(date.toDateString()); //  Sat Oct 08 2022
console.log(date.toTimeString()); // 16:13:21 GMT+0100 (West Africa Standard Time)
console.log(date.toISOString()); // 2022-10-08T15:15:29.739Z
console.log(date.toUTCString()); // Sat, 08 Oct 2022 15:28:12 GMT
console.log(date.toGMTString()); // Sat, 08 Oct 2022 15:29:14 GMT
console.log(date.toJSON()); //  2022-10-08T15:30:30.689Z
console.log(date.toLocaleString()); // 10/8/2022, 4:47:37 PM
console.log(date.toLocaleDateString()); // 10/8/2022
console.log(date.toLocaleTimeString()); // 4:51:26 PM

const nowDate = Date.now();
console.log(nowDate); // 1665266769558

// To get Date, Month and Year or Time
const getDate = new Date();

// const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
console.log(getDate.getMonth()); // 9 - is october because the counting is zero index based.
console.log(getDate.getDate()); // 8
console.log(getDate.getFullYear()); // 2022
console.log(getDate.getHours()); // 17
console.log(getDate.getMinutes()); // 26

// Live Clock JavaScript
const clockSpan = document.querySelector('.clockSpan');

function getTime() {
	let myDay = new Date();
	let mySecs = myDay.getSeconds();
	let myHour = myDay.getHours();
	let myMins = myDay.getMinutes();

	clockSpan.textContent =
		('0' + myHour).substr(-2) +
		':' +
		('0' + myMins).substr(-2) +
		':' +
		('0' + mySecs).substr(-2);
}
// getTime()
setInterval(getTime, 1000);

// calculating elapsed time
const startTime = Date.now();
const endTime = Date.now();
const totalElapsed = endTime - startTime;
console.log(totalElapsed); // elapsed time in milliseconds\

// Get the number of seconds since the ECMAScript Epoch
const scondz = Math.floor(Date.now() / 1000);
console.log(scondz); // 1665267340

// challenge : add one day to current date.
const oneDay = new Date();
console.log(oneDay.setDate(oneDay.getDate() + 1));

// add a week to current date
const numOfWeek = 1;
console.log(oneDay.setDate(oneDay.getDate() + numOfWeek * 7));

// challenge - get the number of milliseconds since july 15th 1990 and output in the console.
const birthdayz = new Date('July 15, 1990 01:15:00:526');
console.log(birthdayz.getMilliseconds()); // 526

// JSON Parse and JSON Stringify
// JSON Parse converts JSON to JavaScript object
//  The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string. An optional reviver function can be provided to perform a transformation on the resulting object before it is returned.
//  note: Make sure the text is in JSON format, or else you will get a syntax error.

const JSONTest = '{"name": "Raymond", "isOld": false, "age": "32"}';
const parseAns = JSON.parse(JSONTest);
console.log(parseAns); // answer {name: 'Raymond', isOld: false, age: '32'}

//  Array as JSON - when we receive a JSON, we can also parse it.
const parseArr = '["Toyota","Lexus","Prado","BMW"]';
const parseAns2 = JSON.parse(parseArr);
console.log(parseAns2); // ['Toyota', 'Lexus', 'Prado', 'BMW']

// JSON Stringify - Does the opposite of JSON.parse(), it convert Javascript object or value to JSON
const stringifyTest = {
	first: 'January',
	isBest: true,
	num: 01,
	last: 'December',
	color: 'red',
};
const stringifyTestAns = JSON.stringify(stringifyTest);
console.log(stringifyTestAns); // {"first":"January","isBest":true,"num":1,"last":"December","color":"red"}

console.log(JSON.stringify({ x: 5, y: 6 }));
// expected output: "{"x":5,"y":6}"

console.log(
	JSON.stringify([new Number(3), new String('false'), new Boolean(false)])
);
// expected output: "[3,"false",false]"

console.log(JSON.stringify({ x: [10, undefined, function () {}, Symbol('')] }));
// expected output: "{"x":[10,null,null,null]}"

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// expected output: ""2006-01-02T15:04:05.000Z""

// Note: when you stringgify undefined, emptyfunction and empty symbol, it outputs as null

// ***************** LOCal storage
//  localStorage is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date. This means the data stored in the browser will persist even after the browser window is closed.
// 4 methods :
// localStorage.setItem();
// localStorage.getItem();
// localStorage.removeItem();
// localStorage.clear();
// key(index) – get the key on a given position.
// length – the number of stored items.

// localStorage.setItem('Ray', 'Idengeli')

// setTimeout(() => {
// 	alert(`first is get ${localStorage.getItem('Ray')}` )
// }, 5000);

// setTimeout(() => {
// 	// alert(localStorage.removeItem('Ray'))
// 	alert(`Second is remove Ray:  ${localStorage.removeItem('Ray')}`)

// }, 10000);

// setTimeout(() => {
// 	// alert(localStorage.getItem('Ray'))
// 	alert(`Last is try to get what we just deleted ${localStorage.getItem('Ray')}` )
// }, 15000);

// setTimeout(() => {
// 	alert(`clear ray storage ${localStorage.clear('Ray')}` )
// }, 15000);

// setTimeout(() => {
// 	// alert(localStorage.getItem('Ray'))
// 	alert(`Last is try to get what we just cleared: ${localStorage.getItem('Ray')}` )
// }, 15000);

// challenge 5 - Check if a value exists in the local storage, if it does, increment it by one, otherwise create it and set it to:
// Output the value in the console
let numStorage;
let cnt2 = 1;
cnt2 = Number(cnt2);
cnt2++;
localStorage.setItem('numStorage', cnt2++);
// localStorage.clear('numStorage')  // test to clear

function checkIfOnStorage() {
	if (localStorage.getItem('numStorage') !== null) {
		// alert(localStorage.getItem('numStorage'))
		console.log(`storage exist by ${localStorage.getItem('numStorage')}`);
	} else {
		console.log('Storage does not exist');
	}
}
checkIfOnStorage();

// Alternate method
// const myObj = {name: 'RayDue', last: 'Idengeli'}

// if(localStorage.getItem('num')){
//     let cnt = localStorage.getItem('num')
//     cnt = Number(cnt)
//     cnt++;
//     localStorage.setItem('num',cnt)
// } else{
//     localStorage.setItem('num',1)
// }
// console.log(localStorage.getItem('num'))

// getBoundingClientRect method JavaScript
//this method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
//  read if needed

// **********************     JS TIMERS   ************************************
//  setTimeout() and  setInterval();
// They allow us to delay the execution of arbitrary instructions

// setTimeout()  -  sets a timer which executes a function or specified piece of code once the timer expires.
// setTimeout(() => {
// 	console.log('timer starts in 3 seconds')
// }, 3000);

//  Using setTimeout() for asynchronous functions - here functions run asynchrounously
//  meaning that the timer function will not pause execution of other functions in the functions stack. In other words, you cannot use setTimeout() to create a "pause" before the next function in the function stack fires.
// setTimeout(() => {
// 	console.log('Run first message')
// }, 5000);
// setTimeout(() => {
// 	console.log('Run second message')
// }, 3000);
// setTimeout(() => {
// 	console.log('Run third message')
// }, 1000);

// The setInterval() method calls a FUNCTION at specified intervals (in milliseconds).
// setInterval() method repeatedly calls a function or executes a code snippets with a fixed time delay between each call.
// it returns an interval ID which uniquely identifies the interval, so you can remove it later by calling it.

// To execute the function only once, use the setTimeout() method instead.
// The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.

function displayHello() {
	console.log('hello Ray'); // WORKED
}
const rayInterval = setInterval(displayHello, 1000); // RAY called every 10 seconds
clearInterval(rayInterval); // interval stops

// Create a countdown timer that decreases by one second until it reaches zero
let timeLeft = 20;
let downloadTimer = setInterval(function () {
	if (timeLeft <= 0) {
		clearInterval(downloadTimer);
		document.querySelector('.countDownClass').innerHTML = 'Finished';
	} else {
		document.querySelector(
			'.countDownClass'
		).innerHTML = `${timeLeft}  Seconds remaining`;
	}
	timeLeft = timeLeft - 1; // 20 - 1
}, 1000);

// encode decode URI component - methods that helps us to endode or decode URI
//  is a usual task in web development while making a GET request to API with query params. Many times construct a URL string with query params and in order to understand it, the response server needs to decode this URL. Browsers automatically encode the URL i.e. it converts some special characters to other reserved characters and then makes the request. For eg: Space character ” ” is either converted to + or %20.

//  Uniform Resource Identifier is a unique sequence of characters that identifies a logical or physical resource used by web technologies.

// e.g to encode a URI
let testUri = 'https://mozilla.org/?x=шеллы';
let encodeUri = encodeURIComponent(testUri);
console.log(encodeUri); // successfully encoded
// document.write(encodeUri) // https%3A%2F%2Fmozilla.org%2F%3Fx%3D%D1%88%D0%B5%D0%BB%D0%BB%D1%8B

// to decode the URI back
let testUri2 =
	'https%3A%2F%2Fmozilla.org%2F%3Fx%3D%D1%88%D0%B5%D0%BB%D0%BB%D1%8B';
let decodeUri = decodeURIComponent(testUri2);
// document.write(decodeUri);
console.log(decodeUri); // https://mozilla.org/?x=шеллы

// to encode the current page URL
let testCurrent = window.location.href;
let encodeCurrent = encodeURIComponent(testCurrent);
// document.write(encodeCurrent)
console.log(encodeCurrent); // http%3A%2F%2F127.0.0.1%3A5500%2FDOM.html
console.log(decodeURIComponent(encodeCurrent)); // http://127.0.0.1:5500/DOM.html
console.log(encodeURI(encodeCurrent)); // http%253A%252F%252F127.0.0.1%253A5500%252FDOM.html
console.log(decodeURI(encodeCurrent)); // http%3A%2F%2F127.0.0.1%3A5500%2FDOM.html

// challenge 8 -try to code the URL below and encode/decode with all encode/decode url method
let url2 = 'https://wwww.discoveryvip.com/?id=user-id&more=hello world';
console.log(decodeURI(url2));
console.log(decodeURIComponent(url2));

// **********************      REGEX ******************************
// A regular expression is a sequence of characters that forms a search pattern.
// The search pattern can be used for text search and text replace operations.   (READ MORE ON MDN)

// ****************************  PROTOTYPE JAVASCRIPT  ****************************
// The prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible. Every function includes prototype object by default.

// The Object.prototype is a property of the Object constructor. And it is also the end of a prototype chain.
// All Javascript object inherits properties and method from a prototype (this keyword)
// Note: declare it before you try to use it:
// Note: date objects inherits from date.prototype

// The prototype chain
let proto = {
	name: 'ray',
	age: 24,
	about() {
		console.log(`Name ${this.name} and age ${this.age}`);
	},
};
proto.about(); // Name ray and age 24

/*
All JavaScript objects inherit properties and methods from a prototype:
Date objects inherit from Date.prototype
Array objects inherit from Array.prototype
Person objects inherit from Person.prototype
*/

// Adding Properties and Methods to Objects
// Sometimes you want to add new properties (or methods) to all existing objects of a given type.
// Sometimes you want to add new properties (or methods) to an object constructor.
// Using the prototype Property
// The JavaScript prototype property allows you to add new properties to object constructors:
function Person(name, occupation, age, hobby) {
	this.name = name;
	this.occupation = occupation;
	this.age = age;
	this.hobby = hobby;
}
// // to add new property
// Person.prototype.bestArtist = 'Fela'
const rayUser = new Person('Raymond', 'Software Engineer', 25, 'driving');
console.log(rayUser); // Person {name: 'Raymond', occupation: 'Software Engineer', age: 25, hobby: 'driving'}

function Person(color, height, car) {
	this.color = color;
	this.height = height;
	this.car = car;
}
Person.prototype.Raybio = function () {
	return `Raymond is ${this.color}, ${this.height} inches in height and drives a ${this.car}`;
};
const me = new Person('black', 5, 'Camry');
console.log(me.color); // {color: 'black', height: 5, car: 'Camry'}
console.log(me.Raybio()); // Raymond is black, 5 inches in height and drives a Camry

// ********************** JS try and catch *************************
// The try...catch statement is comprised of a TRY block and either a CATCH block, a FINALLY block, or both.
// it allows us to customize error and factor it in.
try {
	function func() {
		console.log('Try and catch called here'); // Try and catch called here
	}
	func();
} catch (e) {
	console.log(e);
}

/**
 * the catch-block contains statements that specify what to do if an exception is thrown in the try-block. If any statement within the try-block (or in a function called from within the try-block) throws an exception, control is immediately shifted to the catch-block. If no exception is thrown in the try-block, the catch-block is skipped.

The finally block will always execute before control flow exits the try...catch...finally
 */
try {
	alller('alert');
} catch (e) {
	console.log(e); // alller is not defined
}

let tryTest = document.createElement('input');
tryTest.setAttribute('type', 'text');
tryTest.setAttribute('value', 20);
document.body.appendChild(tryTest);

const btn = document.getElementById('try');
btn.addEventListener('click', tester);
function tester() {
	let num5 = tryTest.value;
	try {
		if (num5 === '') throw 'No Value Entered'; // this appears when it is clicked with the input empty
		if (isNaN(num5)) throw 'please enter a number';
		num5 = Number(num5);
		if (num5 > 4) throw 'greater than 4';
	} catch (error) {
		console.log(error);
	} finally {
		console.log('This will always run');
	}
}

// XMLHtttpRequest() - We use XMLHtttpRequest() object to interact with servers, we can retrieve date from a URL without having to refresh the entire page
// it enables a Web page to update just part of a page without disrupting what the user is doing.

// Note: all modern browsers have a built-in XMLHttpRequest object to request data from a server.

// CONSTRUCTOR -- The constructor initializes an XMLHttpRequest. It must be called before any other method calls.
//  to use, it must begin with the constructor:  XMLHttpRequest() ,
// we aslo have XMLHttpRequest.readyState  - which is a property that returns the state an XMLHtttpRequest client is in.

//****************************** */ Instance properties
/*This interface also inherits properties of XMLHttpRequestEventTarget and of EventTarget.

XMLHttpRequest.readyState - Returns a number representing the state of the request.

XMLHttpRequest.response - Returns an ArrayBuffer, a Blob, a Document, a JavaScript object, or a string, depending on the value of XMLHttpRequest.responseType, that contains the response entity body.

XMLHttpRequest.responseText - Returns a string that contains the response to the request as text, or null if the request was unsuccessful or has not yet been sent.

XMLHttpRequest.responseType - Specifies the type of the response.

XMLHttpRequest.responseURL - Returns the serialized URL of the response or the empty string if the URL is null.

XMLHttpRequest.responseXML - Returns a Document containing the response to the request, or null if the request was unsuccessful, has not yet been sent, or cannot be parsed as XML or HTML. Not available in Web Workers.

XMLHttpRequest.status - returns the htttp response status code of the request.

XMLHttpRequest.statusText - Returns a string containing the response string returned by the HTTP server. Unlike XMLHttpRequest.status, this includes the entire text of the response message ("OK", for example).

XMLHttpRequest.timeout - The time in milliseconds a request can take before automatically being terminated.

XMLHttpRequest.upload - A XMLHttpRequestUpload representing the upload process.

XMLHttpRequest.withCredentials - Returns true if cross-site Access-Control requests should be made using credentials such as cookies or authorization headers; otherwise false.




Also we have non-standard properties which can be found on MDN

***********************************    INSTANCE METHODS    ************** 
XMLHttpRequest.abort() - Aborts the request if it has already been sent.

XMLHttpRequest.getAllResponseHeaders() - Returns all the response headers, separated by CRLF, as a string, or null if no response has been received.

XMLHttpRequest.getResponseHeader() - Returns the string containing the text of the specified header, or null if either the response has not yet been received or the header doesn't exist in the response.

XMLHttpRequest.open() - Initializes a request.

XMLHttpRequest.overrideMimeType() - Overrides the MIME type returned by the server.

XMLHttpRequest.send() - Sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent.

XMLHttpRequest.setRequestHeader() - Sets the value of an HTTP request header. You must call setRequestHeader() after open(), but before send().



******************************     Events       *********************
abort - Fired when a request has been aborted, for example because the program called XMLHttpRequest.abort(). Also available via the onabort event handler property.

error - Fired when the request encountered an error. Also available via the onerror event handler property.

load - Fired when an XMLHttpRequest transaction completes successfully. Also available via the onload event handler property.

loadend - Fired when a request has completed, whether successfully (after load) or unsuccessfully (after abort or error). Also available via the onloadend event handler property.

loadstart - Fired when a request has started to load data. Also available via the onloadstart event handler property.

progress - Fired periodically when a request receives more data. Also available via the onprogress event handler property.

readystatechange - Fired whenever the readyState property changes. Also available via the onreadystatechange event handler property.

timeout - Fired when progress is terminated due to preset time expiring. Also available via the ontimeout event handler property.


*/

// example
let xhttp = new XMLHttpRequest();
// console.log(xhttp)
xhttp.onreadystatechange = function () {
	if (this.readystate == 4 && this.status == 200) {
		// below is where action will be performed when the document is ready
		document.getElementById('demo2').innerHTML = xhttp.responseText;
	}
};
// xhttp.open("GET", "filename", true);
// xhttp.send();

/*
The first line in the example above creates an XMLHttpRequest object:

var xhttp = new XMLHttpRequest();
The onreadystatechange property specifies a function to be executed every time the status of the XMLHttpRequest object changes:

xhttp.onreadystatechange = function()
When readyState property is 4 and the status property is 200, the response is ready:

if (this.readyState == 4 && this.status == 200)
The responseText property returns the server response as a text string.

The text string can be used to update a web page:

document.getElementById("demo").innerHTML = xhttp.responseText;
*/

// e.g 2 to use XML to call Juck Norris Joke API
let xhrChuck = new XMLHttpRequest();
const chuckUrl = 'https://api.chucknorris.io/jokes/random';
xhrChuck.onreadystatechange = function () {
	console.log(xhrChuck.readyState);
	if (this.readyState == 4 && this.status == 200) {
		console.log(xhrChuck.response);
		// the API is in JSON format so we will need to convert it to javascript object
		let chuckJoke = JSON.parse(xhrChuck.response);
		console.log(chuckJoke.id); // shows the id associated with a joke
		console.log(chuckJoke.value); // shows the actual joke
		// document.write(chuckJoke.value)
		// document.getElementById('showChuck').innerHTML = `${chuckJoke.value} <br> <img src="${chuckJoke.icon_url}"/>`
		document.getElementById('showChuck').innerHTML =
			chuckJoke.value + '<br> <img src="' + chuckJoke.icon_url + '">';
	}
};
xhrChuck.open('GET', chuckUrl);
xhrChuck.send();

// random joke api -- https://official-joke-api.appspot.com/random_joke
let xhrRanJoke = new XMLHttpRequest();
const ranJokeUrl = 'https://official-joke-api.appspot.com/random_joke';
console.log(xhrRanJoke);
xhrRanJoke.onreadystatechange = function () {
	if (this.readyState === 4 && this.status === 200) {
		console.log(xhrRanJoke.response);
		console.log(xhrRanJoke.responseText);
		let parsedJoke = JSON.parse(xhrRanJoke.response);
		console.log(parsedJoke);
	}
};
xhrRanJoke.open('GET', ranJokeUrl);
xhrRanJoke.send();

// *********************   FETCH *********************
// Fetch is a newer way to make API request. similar to XML, but the new API provides a more powerful and flexible feature set.

/*
Fetch provides a generic definition of Request and Response objects (and other things involved with network requests). This will allow them to be used wherever they are needed in the future, whether it's for service workers, Cache API, and other similar things that handle or modify requests and responses, or any kind of use case that might require you to generate your responses programmatically (that is, the use of computer program or personal programming instructions).

It also defines related concepts such as CORS and the HTTP Origin header semantics, supplanting their separate definitions elsewhere.

For making a request and fetching a resource, use the fetch() method. It is implemented in multiple interfaces, specifically Window and WorkerGlobalScope. This makes it available in pretty much any context you might want to fetch resources in.

The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers — even if the server response is an HTTP error status. You can also optionally pass in an init options object as the second argument (see Request).

Once a Response is retrieved, there are a number of methods available to define what the body content is and how it should be handled.

You can create a request and response directly using the Request() and Response() constructors, but it's uncommon to do this directly. Instead, these are more likely to be created as results of other API actions (for example, FetchEvent.respondWith() from service workers).



Aborting a fetch - to do this, use To abort incomplete fetch(), and even XMLHttpRequest, operations, use the AbortController and AbortSignal interfaces.


                                            Fetch Interfaces/Features
fetch() - The fetch() method used to fetch a resource.

Headers - Represents response/request headers, allowing you to query them and take different actions depending on the results.

Request - Represents a resource request.

Response - Represents the response to a request.
*/

// example with chuck Jokes

// https://api.chucknorris.io/jokes/random

const chuck2 = document.getElementById('chuck2');
const chuckUrl2 = 'https://api.chucknorris.io/jokes/random';
chuck2.addEventListener('click', function () {
	fetch(chuckUrl2)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data.value); // worked
		});
});

// Fetch() API -challenge -random User Api
const randomUser = document.getElementById('randomUser');
let ranUserUrl = 'https://randomuser.me/api/';
let el3 = document.createElement('input');
el3.setAttribute('type', 'number');
el3.setAttribute('value', 10);
document.body.appendChild(el3);
randomUser.addEventListener('click', getUsers);
function getUsers() {
	// to custom the search result number based in number inputted
	let inputNumber = ranUserUrl + '?results=' + el3.value;
	fetch(inputNumber)
		.then(function (resp) {
			return resp.json();
		})
		.then(function (data) {
			console.log(data.results);
		});
}

// *************************************  ASYNC JS ****************************************
// synchrounous
// console.log('one')
// console.log('two')

// setTimeout(() => {
// 	console.log('three')
// }, 9000);
// console.log('four')

// Hypertext Transfer Protocol (HTTP) is an application-layer protocol for transmitting hypermedia documents, such as HTML. It was designed for communication between web browsers and web servers, but it can also be used for other purposes.

// test xml reuest with fake json placeholder

// lets try to warp our code with a callback

// let fakeJSON = new XMLHttpRequest();
// const fakeJSONURL = "https://jsonplaceholder.typicode.com/todos/"
// console.log(fakeJSON)
// fakeJSON.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status == 200){
//         // console.log(fakeJSON.response);
//         let parsedFake = JSON.parse(fakeJSON.responseText)
//         // console.log(parsedFake)
//         // console.log(parsedFake.id)
//     } else if(this.readyState === 4){
// 		console.log('Could not fetch the data')
// 	}
// }
// fakeJSON.open('GET',fakeJSONURL)
// fakeJSON.send()

// Promises  - just like the word itself, in JS promises either gets resolved (successful) or rejected(not successful).
// const getSomething = () => {

// 	return new Promise((resolve,reject) => {
// 		// fetch something
// 		resolve('some data for Promise');
// 		// reject('reject for Promise')
// 	});

// }

// getSomething().then((data) => {
// 	console.log(data)
// }, (err) => {
// 	console.log(err) // works
// })

// or we use catch to handle reject/errors

// getSomething().then(data => {
// 	console.log(data)
// }).catch(err => {
// 	console.log(err)
// })

// to properly do this, with all we learnt from above and promise

const getTodos = (resource, callback) => {
	return new Promise((resolve, reject) => {
		let fakeJSON = new XMLHttpRequest();
		const fakeJSONURL = 'https://jsonplaceholder.typicode.com/todos/';
		console.log(fakeJSON);
		fakeJSON.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				// console.log(fakeJSON.response);
				let parsedFake = JSON.parse(fakeJSON.responseText);
				resolve(parsedFake);
			} else if (this.readyState === 4) {
				reject('Could not fetch the data');
			}
		};
		fakeJSON.open('GET', fakeJSONURL);
		fakeJSON.send();
	});
};
getTodos().then(parsedFake => {
	console.log('Promise resolved:', parsedFake);
}).catch(err => {
	console.log('promise rejected:',err)
})