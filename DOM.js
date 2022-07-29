// Challenge 1 --> Add the ability to click on elements with class = listItem and toggle the class red to the element 
let addClass = document.querySelectorAll('.listItem');

for(let i = 0; i < addClass.length; i++){
	addClass[i].style.cursor = "pointer";
	addClass[i].addEventListener('click', function(){	
		addClass[i].classList.toggle('red')
	})
}


