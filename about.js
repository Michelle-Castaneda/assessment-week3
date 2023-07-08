console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Quacktastic news! Your form has been successfully submitted.');
}


let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);

const duckAlert = document.querySelector('#ducklogo')

function duckCompliment() {
	alert('Quack-tastic! You are as brilliant as a sunny day on the pond!')
}

duckAlert.addEventListener('mouseover',duckCompliment)

