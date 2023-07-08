const randomRestaurant = document.querySelector('#randomRes');
const restaurantArr = ['Bliss', 'J Prime Steakhouse', 'Biga on the Banks','210 Ceviche Seafood', 'Titos Restaurant y Cantina']


function randomBtn () {
    const randomElem = Math.floor(Math.random() * restaurantArr.length);
    alert(`You should eat in ${restaurantArr[randomElem]}`)
}


randomRestaurant.addEventListener('click', randomBtn)