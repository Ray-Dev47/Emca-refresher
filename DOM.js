// DOM represents the documents as nodes and object
// The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree. With them, you can change the document's structure, style, or content.
console.dir(document);
document.querySelector('h1').innerHTML = 'Test to Change Header  One '




// challenge - Select element from the HTML and update the backround color
console.log(document.getElementById('myID').innerHTML) // This is the first DIV
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
for(i = 0; i < allSpan.length; i++){
    allSpan[i].style.color = 'red'
    // allSpan[i].innerHTML = 'changed'
    // to add to the existing text
    allSpan[i].textContent = (i + 1) + ' added text'
    console.log(allSpan[i])
}
console.log(allSpan.attributes)


// Element manipulation
// innerContent, innerText, innerHTML are used to update and manupulate the DOM

// Challenge-- 
// update all list items with ids in sequence and count. Get class attribute output to console
// Remove the first div with class of pickme
let liChall = document.querySelector(".second").getElementsByTagName("li");
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
head.setAttribute('id','red');
head.innerHTML = 'try'
console.log(head)

const button = document.querySelector('button');
button.setAttribute('name', 'Raymond');
button.style.backgroundColor = 'red';
// button.removeAttribute('name')
// button.remove();
console.log(button)


const linkTry = document.querySelectorAll('a')
linkTry.forEach(function(el){
    console.log(el.getAttribute('href'));
    el.setAttribute('href', 'http://google.com')  // works, routes to google when clicked
})
// console.log(linkTry())



// Element Classses
// Here we can: replace , remove, toggle & add classes
// Check if class exist in classList of element

// Element.classList
// The Element.classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list.
let tag = document.createElement('h1');
tag.className = 'header1';   // adds a classname
tag.innerText = 'Header 1'
console.log(tag.outerHTML); // <h1 class="header1">Header 1</h1>

// to remove and add classname
tag.classList.remove('header1');
tag.classList.add('headerOne')  // changed
console.log(tag.outerHTML);  // <h1 class="headerOne">Header 1</h1>


//  to toggle (btn event listener can be used to achieve this)
tag.classList.toggle('headerOneToggle');
console.log(tag.outerHTML);  // <h1 class="headerOne headerOneToggle">Header 1</h1>

// to check a class exist in classList of element
console.log(tag.classList.contains("headerOne"));  // true


// to add multiple classses
tag.classList.add('one','two','three')
console.log(tag)

// to remove multiple classes, use same method as above

// to replace classes
tag.classList.replace('one','one1')
console.log(tag)

//add or remove multiple classes using spread syntax
const spreadTest = ['val1','val2','val3']
tag.classList.add(...spreadTest)
console.log(tag);
tag.classList.remove(...spreadTest);


// element children and traversing

