function linkedinMichelle (){
	window.location.href = "https://www.linkedin.com/in/michellecastaneda/"
}

const favColor = document.querySelector('#color')
function clickColor(){
    alert('My favorite color is Purple')
}
favColor.addEventListener('click',clickColor)

const favPlace = document.querySelector('#place')
function clickPlace(){
    alert('My favorite Place is Paris')
}
favPlace.addEventListener('click',clickPlace)

const favRitual = document.querySelector('#ritual')
function clickRitual(){
    alert('My favorite ritual is Meditation at Sunrise')
}
favRitual.addEventListener('click',clickRitual)