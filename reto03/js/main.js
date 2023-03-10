const button = document.getElementById('add_button')
const pop_up = document.querySelector('.pop_up')
const fondo = document.querySelector('.fondo')
const contenedorCards = document.querySelector('.contenedorCards');
let tareas = function (nombreTarea, descripcionTarea, tipotarea) {
    contenedorCards.innerHTML += 
    `<div class="card">
        <div class="tipodetarea">
            <h2>${tipotarea}</h2>
        </div>
        <div class="card__contenido">
            <h3>${nombreTarea}</h3>
            <p>${descripcionTarea}</p>
        </div>
    </div> `
}

// POP UP
button.addEventListener('click', function(){
    pop_up.classList.add('mostrar');
    fondo.classList.add('esconder');
    contenedorCards.classList.add('esconder');
})

//FORMULARIO
let formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (e) =>{
    e.preventDefault()
    let nombreTarea = e.target.nombreTarea.value;
    let tipoTarea = document.querySelector('#seleccionarTarea').value
    let descripcionTarea = e.target.descripcionTarea.value;
    tareas(nombreTarea, descripcionTarea, tipoTarea)
})



const agregarTarea = document.querySelector('#popupAgregar').addEventListener('click', ()=>{
    pop_up.classList.remove('mostrar');
    contenedorCards.classList.remove('esconder');
    contenedorCards.classList.add('haytareas');
})

const cancelarTarea = document.querySelector('#popupCancelar').addEventListener('click', ()=>{
    pop_up.classList.remove('mostrar');
    if(contenedorCards.classList.value === 'contenedorCards haytareas esconder'){
        contenedorCards.classList.remove('esconder');
        fondo.classList.add('esconder');
    }else{
        fondo.classList.remove('esconder');
        contenedorCards.classList.add('esconder');
    }
    
})

// CREACION DEL HTML












