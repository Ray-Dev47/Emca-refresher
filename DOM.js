// DOM represents the documents as nodes and object
// The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree. With them, you can change the document's structure, style, or content.
console.dir(document);
document.querySelector('h1').innerHTML = 'Test to Change Header  One '




// challenge - Select element from the HTML and update the backround color
console.log(document.getElementById('myID').innerHTML) // This is the first DIV
document.querySelector('.first span').style.backgroundColor = "yellow";
document.querySelector('span').innerHTML = 'Span change'
// document.querySelector('.first span').style.backgroundColor = 'red';
// document.querySelector('.first span:last-child').style.backgroundColor = 'blue'
document.querySelector('li:nth-child(3)').style.backgroundColor = 'crimson'
document.querySelector('li:first-child').style.backgroundColor = 'green'