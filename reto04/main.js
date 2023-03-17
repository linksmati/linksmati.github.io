let player1 = document.querySelector('#player1');
let player2 = document.querySelector('#player2');

// Jugadores
let jugador1 = [] 

let jugador2 = [] 
console.log(jugador1,jugador2);
// Partidas
const partida = []
// Botones
let play = document.querySelector('#play');
let x = document.querySelector('#x')
// Selectores de paginas
const paginaPrincipal = document.querySelector('.pp__contenedor');
const loading = document.querySelector('.pc__loading');
const cartas = document.querySelector('.pc__contenedor');
const popUp =document.querySelector('.popup');
const mostrarocultar = document.querySelector('.mostrarocultar');



// Eventos
play.addEventListener('click', mostrarCartas)
x.addEventListener('click', mostrarPopUp)
// Funciones
function nombresJugadores(player1, player2){
    jugador1.push({nombre: player1.value})
    jugador2.push({nombre: player2.value})
}

function mostrarCartas (){
    paginaPrincipal.style.display = "none";
    loading.style.display = "flex";
    setTimeout(()=>{
        loading.style.display = "none";
        cartas.style.display = "flex";
    }, 300)
    nombresJugadores(player1, player2)
} 
function mostrarPopUp(){
    if(cartas.style.display == "flex" && popUp.style.display == "flex"){ 
        popUp.style.display = "none"
        mostrarocultar.style.display = "block"
    }else if(cartas.style.display == "flex"){
        mostrarocultar.style.display = "none"
        popUp.style.display = "flex"
        console.log(popUp);
    } 
}
