const button = document.getElementById('add_button')
const pop_up = document.querySelector('.pop_up')
const fondo = document.querySelector('.fondo')

button.addEventListener('click', function(){
    if(pop_up.classList.value !== 'pop_up mostrar'){
    pop_up.classList.add('mostrar');
    fondo.classList.add('esconder')
    } else{
        pop_up.classList.remove('mostrar');
        fondo.classList.remove('esconder')
    }
})

const contenedorCards = document.querySelector('.contenedorCards');
console.log(contenedorCards);
const agregarTarea = document.querySelector('#popupAgregar').addEventListener('click', ()=>{

})



const cancelarTarea = document.querySelector('#popupCancelar').addEventListener('click', ()=>{
    pop_up.classList.remove('mostrar');
})






