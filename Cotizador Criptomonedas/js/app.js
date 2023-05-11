// VARIABLES
const criptoMonedaSelect  = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda')
const formulario = document.querySelector('#formulario');
const contenedor = document.querySelector('.contenedor');
const contenedorspinner = document.querySelector('.contenedorspinner')
const resultado = document.querySelector('#resultado');
const objBusqueda = {
    moneda:'',
    criptomoneda:''
}


// PROMISES
const obtenerCriptomonedas = criptomonedas => new Promise(resolve => {
    resolve(criptomonedas)
})



//EVENTOS
document.addEventListener( 'DOMContentLoaded', ()=>{
    consultarCriptoMonedas();
    formulario.addEventListener('submit', submitFormulario);
    criptoMonedaSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);

});



//FUNCIONES
function consultarCriptoMonedas(){
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=35&tsym=USD'
    fetch(url)
        .then( respuesta => respuesta.json())
        .then(resultado => obtenerCriptomonedas(resultado.Data))
        .then(criptomonedas => selectCriptomonedas(criptomonedas))
};

function selectCriptomonedas(criptomonedas){
    criptomonedas.forEach(cripto => {
        const {FullName, Name} = cripto.CoinInfo;
        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;
        criptoMonedaSelect.appendChild(option)
    });
}
function leerValor(e){
    objBusqueda[e.target.name] = e.target.value
}


function submitFormulario(e){
    e.preventDefault();

    //validar el formulario
    const {moneda, criptomoneda} = objBusqueda;
    if(moneda === '' || criptomoneda === ''){
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }

        //Consultar la API con los resultados
       consultarApi() 
}
function mostrarAlerta(msj){
    const existeError = document.querySelector('.error');
    if (!existeError) {
        const mensaje = `<div class="error">${msj}</div>`;
        contenedor.innerHTML += mensaje
        setTimeout(()=>{
            contenedor.innerHTML = ""
        },2000);
    }

}
function consultarApi() {
    const{moneda, criptomoneda} = objBusqueda;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    
    fetch(url)
        .then(respuesta=> respuesta.json())
        .then(cotizacion => {
            mostrarCotizacionHtml(cotizacion.DISPLAY[criptomoneda][moneda]);
        });
};
function mostrarCotizacionHtml(cotizacion){

    resultado.innerHTML = "";
    const spinner = ` 
    <div class="sk-folding-cube">
        <div class="sk-cube1 sk-cube"></div>
        <div class="sk-cube2 sk-cube"></div>
        <div class="sk-cube4 sk-cube"></div>
        <div class="sk-cube3 sk-cube"></div>
    </div>`;
    contenedorspinner.innerHTML += spinner

    setTimeout(()=>{
        contenedorspinner.innerHTML = ""
        resultado.innerHTML = "";
        const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE}= cotizacion;
        const precio = `
        <p class="precio">Precio: <span>${PRICE}</span></p>
        <p>El precio más alto del día: <span>${HIGHDAY}</span></p>
        <p>El precio más bajo del día: <span>${LOWDAY}</span></p>
        <p>Variación últimas 24 hs: <span>${CHANGEPCT24HOUR}</span></p>
        <p>Última actualización: <span>${LASTUPDATE}</span></p>
        `;
        resultado.innerHTML += precio
    },3000);



}
// function mostrarSpinner(){

//     const spinner = ` 
//     <div class="sk-folding-cube">
//         <div class="sk-cube1 sk-cube"></div>
//         <div class="sk-cube2 sk-cube"></div>
//         <div class="sk-cube4 sk-cube"></div>
//         <div class="sk-cube3 sk-cube"></div>
//     </div>`;
//     resultado.innerHTML += spinner
// }