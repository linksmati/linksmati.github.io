// VARIABLES
const listadoPizzas = document.querySelector('.listado__pizzas');
const menuBtn = document.querySelector('#menuBtn');
const menuClose = document.querySelector('#menuClose');
const sideBar = document.querySelector('.sideBar');
// EVENTOS
document.addEventListener('DOMContentLoaded', llamarDatos)
menuBtn.addEventListener('click', sideBarOpen)
menuClose.addEventListener('click', sideBarClose)
// FUNCIONES
function llamarDatos () {
    fetch('/menu/datos/menu.json')
        .then(rta=> rta.json())
        .then(res => imprimirContenido(res) )
}
function imprimirContenido(res){
    res.Pizzas.map(item=>{
        const {nombre, descripcion, id, precio } = item
        const html = `
        <div class="elemento">
            <h3 id="${id}"class="elemento__nombre">${nombre}</h3>
            <p class="elemento__descripcion">${descripcion}</p>
            <p class="elemento__precio">$${precio}</p>
        </div>
        `;
        listadoPizzas.innerHTML += html
    })
}

function sideBarOpen(e){
    e.preventDefault()
    if(sideBar.classList =='sideBar'){
        sideBar.classList.add('active')
    }
    
}
function sideBarClose(e){
    e.preventDefault()
    if(sideBar.classList =='sideBar active'){
        sideBar.classList.remove('active')
    }
}