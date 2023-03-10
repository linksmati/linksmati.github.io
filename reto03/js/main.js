const button = document.getElementById('add_button')
const pop_up = document.querySelector('.pop_up')
const fondo = document.querySelector('.fondo')
// CREACION DEL HTML
const contenedorCards = document.querySelector('.contenedorCards');
let tareas = function (prioridad, imagenTarea, nombreTarea) {
    contenedorCards.innerHTML += 
    `<div class="card ${prioridad}">
        <div class="tipodetarea">
            <img src="${imagenTarea}" alt="">
        </div>
        <div class="nombredelatarea">
            <p>${nombreTarea}<p>
        </div>
        <div class="completada">
            <input class="listoBorrar" type="checkbox">
            <button><img src="/reto03/assets/icons/delete.svg" alt=""></button>
        </div>
    </div>`
}


// POP UP
button.addEventListener('click', function(){
    pop_up.classList.add('mostrar');
    fondo.classList.add('esconder');
    contenedorCards.classList.add('esconder');
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

//FORMULARIO
let formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (e) =>{
    e.preventDefault()
    let nombreTarea = e.target.nombreTarea.value;
    let tipoTarea = document.querySelector('#seleccionarTarea').value;

    // IMAGEN
    let imagenTarea = ''
    if(tipoTarea === "Trabajo"){
        imagenTarea = '/reto03/assets/icons/work_task.svg';
    }else if(tipoTarea === "Personal"){ 
        imagenTarea = '/reto03/assets/icons/personal_task.svg';
    }else if(tipoTarea === "Domestica"){
        imagenTarea = '/reto03/assets/icons/house_task.svg';
    }
    console.log(imagenTarea);

    // PRIORIDAD
    let prioridad= ''
    let checkbox = document.querySelectorAll('#checkbox');
    if(checkbox[0].checked === true && checkbox[1].checked === false && checkbox[2].checked === false){   
        prioridad ='prioridad1'
    } else if(checkbox[0].checked === false && checkbox[1].checked === true && checkbox[2].checked === false){
        prioridad ='prioridad2'
    } else if(checkbox[0].checked === false && checkbox[1].checked === false && checkbox[2].checked === true){
        prioridad ='prioridad3'
    }
    console.log(checkbox[0].checked);   

    tareas(prioridad, imagenTarea, nombreTarea)
})
















