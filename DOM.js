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
for (let index = 0; index < liChall.length; index++) {
    // const element = liChall[index];
    // console.log(element)
    liChall[index].innerHTML = `List item #${index + 1}`
}
const removePickMe = document.getElementById('pickMe');
removePickMe.removeAttribute('id');
console.log(removePickMe)
