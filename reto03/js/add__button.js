const button = document.getElementById('add_button')
const pop_up = document.querySelector('.pop_up')
const fondo = document.querySelector('.fondo')

button.addEventListener('click', function(){
    pop_up.classList.add('mostrar');
    fondo.classList.add('esconder')
})



