const button = document.getElementById('add_button')
const pop_up = document.querySelector('.pop_up')
const fondo = document.querySelector('.fondo')

// POP UP
button.addEventListener('click', function(){
    if(pop_up.classList.value !== 'pop_up mostrar'){
    pop_up.classList.add('mostrar');
    fondo.classList.add('esconder')
    } else{
        pop_up.classList.remove('mostrar');
        fondo.classList.remove('esconder')
    }
})

// const cancelarTarea = document.querySelector('#popupCancelar').addEventListener('click', ()=>{
//     pop_up.classList.remove('mostrar');
// })



// CREACION DEL HTML
const contenedorCards = document.querySelector('.contenedorCards');
const tareas = (nombreTarea, descripcionTarea, tipotarea) => {
    contenedorCards.innerHTML += `
    <div class="card">
    <div class="tipodetarea">
        <h2>${tipotarea}</h2>
    </div>
    <div class="card__contenido">
        <h3>${nombreTarea}</h3>
        <p>${descripcionTarea}</p>
    </div>
</div>
    
    `
}


//FORMULARIO
let formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (e) =>{
    e.preventDefault()
    let nombreTarea = e.target.nombreTarea.value;
    let tipoTarea = document.querySelector('#seleccionarTarea').value
    let descripcionTarea = e.target.descripcionTarea.value;

    tareas(nombreTarea, descripcionTarea, tipoTarea)

})








