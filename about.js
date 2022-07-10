console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function mouseOver(event){
	event.preventDefault();
	alert('Give user a compliment!')
}

let pic = document.querySelector('#cat');
pic.addEventListener('mouseover', mouseOver)