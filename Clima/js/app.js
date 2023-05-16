//VARIABLES
const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
// PROMESAS
// EVENTOS
document.addEventListener('DOMContentLoaded', ()=>{
    formulario.addEventListener('submit', buscarClima)
})
// FUNCIONES

function buscarClima(e){
    e.preventDefault()
// PRIMERO: VALIDAMOS LOS DATOS QUE ENVIAMOS A LA API
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;
    if (ciudad === ""|| pais ==="") {
        mostrarError('Ambos campos son obligatorios');
        return;
    }
// SEGUNDO: UNA VEZ QUE LOS DATOS SEAN LOS CORRECTOS LLAMAMOS A LA API
    consultarAPI(ciudad, pais)
}
function mostrarError(msj){
    
        const alerta = document.querySelector('.bg-red-100');
        if(!alerta) {
            const alerta = document.createElement('div'); 
            alerta.classList.add('bg-red-100', "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "relative", "max-w-md", "mx-auto", "mt-6", "text-center" ); 
            alerta.innerHTML = `
                <strong class="font-bold">Error!</strong>
                <span class="block sm:inline">${msj}</span>
            `;
            container.appendChild(alerta);
            setTimeout(() => {
                alerta.remove();
            }, 3500);
    };
    
};
function consultarAPI(ciudad, pais){
    const appId = 'ef8c07b6987899420e4ee81ef585c67c';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
    spinner()
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos =>{
            limpiarHTML()
            if(datos === '404'){
                mostrarError('Ciudad no Encontrada')
                return;
            }
            mostrarClima(datos)
        })
}
function mostrarClima(datos){
    const{name, main:{temp, temp_min, temp_max}} = datos;
    const centrigados = kelvinACentigrados(temp);
    const max = kelvinACentigrados(temp_max);
    const min = kelvinACentigrados(temp_min);
    const nombreCiudad = document.createElement('p');
    nombreCiudad.textContent = `${name}`;
    nombreCiudad.classList.add('font-bold', 'text-4xl');
    const actual = document.createElement('p');
    actual.innerHTML = `${centrigados} °C`;
    actual.classList.add('font-bold', 'text-white', 'text-3xl');
    
    const tempMaxima = document.createElement('p');
    tempMaxima.innerHTML = `Max: ${max} °C`;
    tempMaxima.classList.add('text-md');

    const tempMinima = document.createElement('p');
    tempMinima.innerHTML = `Min: ${min} °C`;
    tempMinima.classList.add('text-md');

    const resultadoDiv = document.createElement('div');
    resultado.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMaxima);
    resultadoDiv.appendChild(tempMinima);
    resultado.appendChild(resultadoDiv);
};
const kelvinACentigrados = grados => parseInt(grados - 273.15);

function limpiarHTML(){
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    };
};
function spinner(){
    limpiarHTML()
    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-fading-circle');
    divSpinner.innerHTML =  
    `
    <div class="sk-circle1 sk-circle"></div>
    <div class="sk-circle2 sk-circle"></div>
    <div class="sk-circle3 sk-circle"></div>
    <div class="sk-circle4 sk-circle"></div>
    <div class="sk-circle5 sk-circle"></div>
    <div class="sk-circle6 sk-circle"></div>
    <div class="sk-circle7 sk-circle"></div>
    <div class="sk-circle8 sk-circle"></div>
    <div class="sk-circle9 sk-circle"></div>
    <div class="sk-circle10 sk-circle"></div>
    <div class="sk-circle11 sk-circle"></div>
    <div class="sk-circle12 sk-circle"></div>
    `;
    resultado.appendChild(divSpinner)
}