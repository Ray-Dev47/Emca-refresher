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


submit.addEventListener('click', function(e){
	let value = textArea.value
	let li = document.createElement('li');
	// let value = event.target.value
	li.textContent = value;
	ul.appendChild(li);
	
	textArea.value = '';
	e.preventDefault();
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
	


})

