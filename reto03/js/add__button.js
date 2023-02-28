const button = document.getElementById('add_button')
const pop_up = document.querySelector('.pop_up')
const fondo = document.querySelector('.fondo')

button.addEventListener('click', function(){
    if(pop_up.classList !== 'mostrar'){
    pop_up.classList.add('mostrar');
    fondo.classList.add('esconder')
    } else if(pop_up.classList === 'mostrar'){
        pop_up.classList.add('esconder');
        fondo.classList.add('mostrar')
    }
})



