// VARIABLES

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
    const listadoPizzas = document.querySelector('.listado__pizzas');
    res[0].Pizzas.map(item=>{
        const {nombre, descripcion, id, precio } = item
        const html = `
        <div class="elemento">
            <h3 id="${id}"class="elemento__nombre">${nombre}</h3>
            <p class="elemento__descripcion">${descripcion}</p>
            <p class="elemento__precio">$${precio}</p>
        </div>
        `;
        listadoPizzas.innerHTML += html
    });
    const listadoPastas= document.querySelector('.listado__pastas');
    res[1].Pastas.map(item=>{
        const {nombre, descripcion, id, precio } = item
        const html = `
        <div class="elemento">
            <h3 id="${id}"class="elemento__nombre">${nombre}</h3>
            <p class="elemento__descripcion">${descripcion}</p>
            <p class="elemento__precio">$${precio}</p>
        </div>
        `;
        listadoPastas.innerHTML += html
    });
    const listadoCarnes= document.querySelector('.listado__carnes');
    res[2].Carnes.map(item=>{
        const {nombre, descripcion, id, precio } = item
        const html = `
        <div class="elemento">
            <h3 id="${id}"class="elemento__nombre">${nombre}</h3>
            <p class="elemento__descripcion">${descripcion}</p>
            <p class="elemento__precio">$${precio}</p>
        </div>
        `;
        listadoCarnes.innerHTML += html
    });
    const listadoBebidas= document.querySelector('.listado__bebidas');
    res[3].Bebidas.map(item=>{
        const {nombre, descripcion, id, precio } = item
        const html = `
        <div class="elemento">
            <h3 id="${id}"class="elemento__nombre">${nombre}</h3>
            <p class="elemento__descripcion">${descripcion}</p>
            <p class="elemento__precio">$${precio}</p>
        </div>
        `;
        listadoBebidas.innerHTML += html
    });
    const listadoTragos= document.querySelector('.listado__tragos');
    res[4].Tragos.map(item=>{
        const {nombre, descripcion, id, precio } = item
        const html = `
        <div class="elemento">
            <h3 id="${id}"class="elemento__nombre">${nombre}</h3>
            <p class="elemento__descripcion">${descripcion}</p>
            <p class="elemento__precio">$${precio}</p>
        </div>
        `;
        listadoTragos.innerHTML += html
    });
    const listadoCafeteria= document.querySelector('.listado__cafeteria');
    res[5].Cafeteria.map(item=>{
        const {nombre, descripcion, id, precio } = item
        const html = `
        <div class="elemento">
            <h3 id="${id}"class="elemento__nombre">${nombre}</h3>
            <p class="elemento__descripcion">${descripcion}</p>
            <p class="elemento__precio">$${precio}</p>
        </div>
        `;
        listadoCafeteria.innerHTML += html
    });
}


function sideBarOpen(e){
    e.preventDefault()
    if(sideBar.classList =='sideBar'){
        sideBar.classList.add('active')
    }
    
}
function sideBarClose(){
    if(sideBar.classList =='sideBar active'){
        sideBar.classList.remove('active')
    }
}

let ubicacionPrincipal = window.scrollY
console.log(ubicacionPrincipal);
window.onscroll = function () {
    let desplazamientoActual = window.scrollY;
    if (ubicacionPrincipal >= desplazamientoActual ) {
        document.querySelector('.header__nav').style.top ='0';
    } else{
        document.querySelector('.header__nav').style.top ='-100%';
    }
    ubicacionPrincipal = desplazamientoActual;
}