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
let currentDiv = document.getElementById('div1')
document.body.insertBefore(newDiv, currentDiv)

// console.log(combineAll)

// Another sample
let rayDiv = document.createElement('div')
rayDiv.id = 'ray'
rayDiv.style.backgroundColor = 'crimson'
rayDiv.style.color = '#fff';
rayDiv.style.padding = '30px'
// let rayContent = document.createTextNode('Create content example 2');

// let totalRay = rayDiv.appendChild(rayContent);
document.body.appendChild(rayDiv);


// Event listeners
// The addEventListener() sets up a function that will be called whenever the specified event is delivered to the target.
// We also have remove listener  removeEventListener();

const eventTest = document.getElementById('testID');
eventTest.style.cursor = "pointer";
eventTest.addEventListener('click', function(){
	console.log('Event H1 Clicked!!')
})

// another way is to invoke a function and call it
eventTest.addEventListener('click', myFunc);
function myFunc(){
	console.log('method 2')
}

// we can analyze the different event we have in the console for h1 above, 
console.dir(eventTest) // options for different events is shown here.


// Challenge 1 --> Add the ability to click on elements with class = listItem and toggle the class red to the element 
let addClass = document.querySelectorAll('.listItem');

for(let i = 0; i < addClass.length; i++){
	addClass[i].style.cursor = "pointer";
	addClass[i].addEventListener('click', function(){	
		addClass[i].classList.toggle('red')
	})
}


// DOM challenge 2  - Image popup
// add a popup image when any image on the page is clicked. popup should show the full size image from the web link

const imgOne = document.getElementById('img-1');
const imgTwo = document.getElementById('img-2');
const imgThree = document.getElementById('img-3');
const btnOne = document.getElementById('btn_1');
const btnTwo = document.getElementById('btn_2');
const btnThree = document.getElementById('btn_3');

btnOne.addEventListener('click', function() {
	if(imgOne.style.width === "100px"){
		imgOne.style.width = "500px"
	} else{
		imgOne.style.width = "100px"
	}
})
btnTwo.addEventListener('click', function() {
	if(imgTwo.style.width === "100px"){
		imgTwo.style.width = "500px"
	} else{
		imgTwo.style.width = "100px"
	}
})
btnThree.addEventListener('click', function() {
	if(imgThree.style.width === "100px"){
		imgThree.style.width = "500px"
	} else{
		imgThree.style.width = "100px"
	}
})

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
let textArea = document.getElementById('textArea')
let submit = document.getElementById('submit');
var addButton=document.getElementsByTagName("button")[0]
console.log(addButton)


submit.addEventListener('click', function(){
	let value = textArea.value
	let li = document.createElement('li');
	let editButton=document.createElement("button");
	// let value = event.target.value
	li.textContent = value;
	li.appendChild(editButton)
	ul.appendChild(li);
	
	textArea.value = '';
	// e.preventDefault();
	if(value == ''){
		alert('empty field!, please input something')
		ul.removeChild(li);
		return false;
	} else{
		return true
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


let eachList = document.getElementById('advList').getElementsByTagName('li')
for(let idx = 0; idx < eachList.length; idx++){
	eachList[idx].style.cursor = 'pointer'
	eachList[idx].style.padding = '10px'

    eachList[idx].addEventListener('click', function myToggle(){
		// eachList[idx].classList.toggle('adv-css')
		// or below
		// this.classList.toggle('adv-css');
		let toggleClass = this.classList.toggle('adv-css');
		if(toggleClass){
			let span = document.createElement('span')
			span.textContent = '    X'
			span.addEventListener('click', function(){
				this.parentElement.remove() 
			})
			this.appendChild(span) 
		}else{
			this.getElementsByTagName('span')[0].remove()
		}
	
	})
	
}



advInput.addEventListener('keypress', function(e){
	// console.log(e.key, e.keyCode, 'pressed')
	if(e.keyCode === 13){
		let advValue = advInput.value
		if(advValue === ''){
			alert('empty field!!')
		} else{
			let advLi = document.createElement('li');	
			advLi.textContent = advValue ;
			advList.appendChild(advLi);
			advInput.value = ''
			let eachList = document.getElementById('advList').getElementsByTagName('li')
			for(let idx = 0; idx < eachList.length; idx++){
				if(advValue !== ''){
					eachList[idx].style.cursor = 'pointer'
				    eachList[idx].style.padding = '10px'

					eachList[idx].addEventListener('click', function(){
						// eachList[idx].classList.toggle('adv-css')
						let toggleClass = this.classList.toggle('adv-css');
		if(toggleClass){
			let span = document.createElement('span')
			span.textContent = '    X'
			span.addEventListener('click', function(){
				this.parentElement.remove() 
			})
			this.appendChild(span) 
		}else{
			this.getElementsByTagName('span')[0].remove()
		}
	
					})

				}
				
			}
		  }
	
	} 
})


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

bgBtn.addEventListener('click', function(){
	// let colorChange = ['red','blue', 'yellow','crimson','gray','purple']
	// let oneColor = colorChange[Math.floor(Math.random()* colorChange.length)]
	// 	randColor.style.backgroundColor = oneColor   // worked!!!

	// to try hex code
	const randomHexColorGenerator = () => {
		let hexColor = (Math.random() * 0xfffff * 1000000).toString(16);
		return '#' + hexColor.slice(0,6);

	}
	document.body.style.backgroundColor = randomHexColorGenerator() // worked
	randColor.style.backgroundColor = randomHexColorGenerator() // worked
})



// EVENT OBJECT
// All event objects in the DOM are based on the Event Object. e.g. mouseEvent and keyboardEvent have access/belong to their mouseEvent object and keyboardEvent objects.

// JS Click event object
// The target property of the event interface is a reference to the object that dispatched the event  ....e.g the e.target
document.querySelector("div ").addEventListener('click', function(e){
	console.log(e)
	console.log(e.type)
	console.log(e.target)
}) 

const eventObject = document.getElementById('eventObject')
eventObject.addEventListener('click', function(eventTest){
	console.dir(eventTest)  // shows pointer event and the various methods available
	// console.log(eventTest.target) 
	// console.log(eventTest.target) 
})




// ************* KEYPRESS EVENT *******************
// keypress challenge -- 
// Add a key event listener for arrow key presses and outputting it into an element along with the keycode in ()
const keyEvent = document.getElementById('keyEvent')
keyEvent.addEventListener('keydown', function(e){
	// console.log('key pressed')
	// console.log(e)
	console.log(e.key, e.keyCode)
	// console.log(e.keyCode);
})


// Mouse Events
// Are fired when a pointing device is moved onto the element that has the listener attached or onto one of its children

// The mouseout event fired when a pointing device(usually a mouse) is moved off the element that as the listener attached or off its children.

// Self challenge

// const mouseHead = document.getElementsByClassName('mouseHead, li')
// console.log(mouseHead)

const mouseHover = document.querySelector('.mouseHead')
// console.log(mouseHover) 

mouseHover.addEventListener('mouseleave', function(){
	// mouseHover.appendChild(li)
	console.log(mouseHover.style.backgroundColor = 'red', 'mouse moved')  // understood
	// for(let idx = 0; idx < mouseHover.length; idx++){
		
	// }

	// e.target.style.backgroundColor = 'red'
})
// other events we have are: mousedown, mouseup,mousemove,mouseover, mouseout,mouseenter,mouseleave


// Mouse Challenge - Highlight list item to red text color when mouse is hovered on the list item. Remove the highlight once off.
// challenge completed via codepen
{/* <ul>
        <li>My Item 1</li>
        <li>Another Item</li>
        <li>My Item 2</li>
        <li>My Item 3</li>
    </ul> */}

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
let myNum2 = "200";
// to roundoff myNum to 2 deceimal places and to convert myNum2 to number
console.log(myNum.toFixed(2));  // 100.46

// to convert string to number
console.log(parseInt(myNum2))  // 200 
// or
console.log(Number('350'))  // 350

// **** Number.isFinite()  -- checks if number passed is a finite number(i.e can be measured)
console.log(Number.isFinite(2/0))// false
console.log(Number.isFinite(4/2))// true cos it can be measured

//******* */ Number.isInteger() -- checks if number passed is an integer (Note intergers are whole numbers without decimals or fractions)
function testIfInteger(x,y){
	 let ans = x/y
	if(Number.isInteger(ans)){
		return 'Yes it is an integer'
	}else{
		return 'It is not an integer'
	}
}
console.log(testIfInteger(3.5,3))  // its not an integer


//******* */ Number.isNaN() - determines whether the passed value is NaN and its type is Number, it is a more robust version of isNaN()
function testifNAN(x){
	if(Number.isNaN(x)){
		return `${x} is NAN`
	}
	else{
		return `${x} is not NAN`
	}
}
console.log(testifNAN('100E'))
console.log(testifNAN(NaN))





// ******** Number.isSafeInteger() -checks whether the provided value is a number that is a safe integer
// The safe integers consist of all integers from -(253 - 1) to 253 - 1, inclusive (±9,007,199,254,740,991). A safe integer is an integer that:
// can be exactly represented as an IEEE-754 double precision number, and
// whose IEEE-754 representation cannot be the result of rounding any other integer to fit the IEEE-754 representation.
// For example, 253 - 1 is a safe integer: it can be exactly represented, and no other integer rounds to it under any IEEE-754 rounding mode. In contrast, 253 is not a safe integer: it can be exactly represented in IEEE-754, but the integer 253 + 1 can't be directly represented in IEEE-754 but instead rounds to 253 under round-to-nearest and round-to-zero rounding.
console.log(Number.isSafeInteger(5)) // true
console.log(Number.isSafeInteger(5.567 *45)) // true


// ********** Number.parseFloat()  - method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN
function circumference(r) {
  if (Number.isNaN(Number.parseFloat(r))) {
    return 0;
  }
  return parseFloat(r) * 2.0 * Math.PI ;
}

console.log(circumference('4.567abcdefgh'));
// expected output: 28.695307297889173

console.log(circumference('abcdefgh'));
// expected output: 0


// *************** Number.parseInt() - Number.parseInt() method parses a string argument and returns an integer of the specified radix or base.
function testParseInt(x,base){
	const parsedAns = Number.parseInt(x,base);
	if(Number.isNaN(parsedAns)){
		return 0;
	} else{
		return parsedAns * 20
	}
} 
console.log(testParseInt('0xF', 4))  // 0
console.log(testParseInt('14', 4)) //20


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
let testRay = 56.789645
console.log(testRay.toFixed(2)) //56.79
function testToFixed(x){
	return Number.parseFloat(x).toFixed(3)
}
console.log(testToFixed(123.7889)) // 123.789


// ***** toLocaleString() is a Number method that is used to convert a number into a locale-specific numeric representation of the number (rounding the result where necessary) and return its value as a string. note: the locales differ by countries
const testLocaleString = 232000;
console.log(testLocaleString.toLocaleString())   // 232,000

const d = new Date();
let text = d.toLocaleString();
console.log(text)   // 10/3/2022, 2:28:40 PM

// number.toPrecision() --  method returns a string representing the Number object to the specified precision.
function testPrecitionTest(x){
	return x.toPrecision(4)
}
console.log(testPrecitionTest(2345.7789))// 2346



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



// JS STRING METHODS -string object is Used to 
// String.prototype.trim() - this method removes white space from a string and returns a new string without modifying the original string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).

const twuale = '    boss i hail     ';
console.log(twuale) // returns a space
console.log(twuale.trim()); // works 


// String.prototype.toLocaleUpperCase() -- The toLocaleUpperCase() method returns the calling string value converted to upper case, according to any locale-specific case mappings.
const testUpper = 'testupper';
console.log(testUpper.toLocaleUpperCase())  // TESTUPPER

// The toLocaleLowerCase() method returns the calling string value converted to lower case, according to any locale-specific case mappings.
const testLower = 'TESTLOWER';
console.log(testLower.toLocaleLowerCase())  // testlower

// string.prototype.split() -- this takes a pattern and divides a string into an ordered list of substrings by searching for the pattern, puts these substrings into an array and returns the array
const testSplit = 'The quick brown fox jumps over a lazy dog';
// to get a single word
const word = testSplit.split(' ');
console.log(word[4])//  jumps
console.log(word[2])//  brown

// to get a single character e.g 'w'    // note space is counted too
const chars = testSplit.split('');
console.log(chars[13])    // w -correct!!
//  to copy to testSplit into another variable
const newSplit = testSplit.split()
console.log(newSplit);   // 'The quick brown fox jumps over a lazy dog'

// syntax
// split()
// split(separator)
// split(separator, limit)

const monthString = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec";
const newMonth =  monthString.split(" ")
console.log(newMonth)  // ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

let text2 = "How are you doing today?";
const myArray = text2.split(" ");  
console.log(myArray) // ['How', 'are', 'you', 'doing', 'today?']


// ******** String.prototype.slice() - extracts a certian section of the string and returns a new one without modifying the original string.
const testSlice = 'armagedon'
const newSlice = testSlice.slice(4)
console.log(newSlice)  // gedon
console.log(text2.slice(3,15)); // are you doi


//  ****************** String.prototype.replace() -replace a new string with one, some or all matches of a pattern replaced by a replacement or new one.
// The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.
const testReplace = 'Raymond is a boy'
console.log(testReplace.replace('boy', 'man'))   // Raymond is a man


// ********* String.prototype.lastIndexOf() - this methods searches the entire string and returns the index of th LAST occurence of the specified substring.
const testLastIndex = 'If he say na fine boy him be, then na fine boy him be na';
let searchParam = 'boy'
console.log(`the last index wey ${searchParam} appear from the end na ${testLastIndex.lastIndexOf(searchParam)}`);
// output: the last index wey boy appear from the end na 43.

// noted that they are zero indexed:                 also it is also case sensitive.
// 'canal'.lastIndexOf('a');     // returns 3
// 'canal'.lastIndexOf('a', 2);  // returns 1
// 'canal'.lastIndexOf('a', 0);  // returns -1
// 'canal'.lastIndexOf('x');     // returns -1
// 'canal'.lastIndexOf('c', -5); // returns 0
// 'canal'.lastIndexOf('c', 0);  // returns 0


// ********** String.prototype.indexOf() ---  searches the entire string and returns the index of th FIRST occurence of the specified substring.
console.log(`the last index wey ${searchParam} appear from the end na ${testLastIndex.indexOf(searchParam)}`);
// output: the last index wey boy appear from the end na 18.

// there are tons of other string method on MDN










