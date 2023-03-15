let player1 = document.querySelector('#player1');
let player2 = document.querySelector('#player2');
let play = document.querySelector('#play');
const loading = document.querySelector('.pc__loading')
const cartas = document.querySelector('.pc__contenedor')
console.log();
// juguemos.addEventListener('click', mostrarCartas())

function mostrarCartas (){
    loading.classList.add('esconderPantalla')
    cartas.classList.add('mostrarPantalla')
} 