const listadoPizzas = document.querySelector('.listado__pizzas');
console.log(listadoPizzas);
// EVENTOS
document.addEventListener('DOMContentLoaded', llamarDatos)
// FUNCIONES
function llamarDatos () {
    fetch('/menu/datos/menu.json')
        .then(rta=> rta.json())
        .then(res => imprimirContenido(res) )
}
function imprimirContenido(res){
    res.Pizzas.map(item=>{
        const {nombre, id, precio } = item
        const html = `
        <div class="elemento">
            <h3 id="${id}"class="elemento__nombre">${nombre}</h3>
            <p class="elemento__precio">$${precio}</p>
        </div>
        `;
        listadoPizzas.innerHTML += html
    })
}