const button = document.getElementById('add_button')
const pop_up = document.querySelector('.pop_up')
const main = document.querySelector('.main')

button.addEventListener('click', ()=>{
    pop_up.classList.add('mostrar')
})





// function popUp (){
//     if(pop_up.style.opacity === 0){
//         pop_up.style.opacity = 1;
//         main__fondo.style.opacity = 0
//     }else if(pop_up.style.opacity === 1){
//         pop_up.style.opacity = 0;
//         main__fondo.style.opacity = 1;
//     }
// }