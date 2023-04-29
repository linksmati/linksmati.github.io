// VARIABLES
const formulario = document.querySelector('#formulario');
const agregarBtn = document.querySelector('.button');
const listaNotas = document.querySelector('#lista-notas');
const textArea = document.querySelector('#notas')

let notas = [];

// EVENTOS
formulario.addEventListener('submit', agregarNota );
document.addEventListener('DOMContentLoaded', ()=>{
    notas = JSON.parse(localStorage.getItem('notas')) || [];
    notaHtml(notas)
})

// FUNCIONES
function agregarNota(e){
    e.preventDefault();
    const contenidoNota = textArea.value.trim();
    const notaObj= {
        id: Date.now(),
        contenidoNota
    }
    notas = [...notas, notaObj]

    mostrarError(contenidoNota)
    notaHtml(notas)
    textArea.value = "" ;  
};

function mostrarError(contenidoNota){
    if(contenidoNota === ''){
        textArea.style.borderColor = 'red';
        textArea.placeholder = 'Escribí una tarea antes';
        console.log(notas);
        return
    }else{
        textArea.style.borderColor = '#33C3F0';
        textArea.placeholder = '';
        
    };
};

function notaHtml(notas) {
    listaNotas.innerHTML ="";
    notas.forEach(nota => {
        const {contenidoNota, id} = nota
        const btnEliminarNota = `<a class="borrar-nota" onclick="borrarNota(${id})">x</a>`;
        const htmlNota = `<li> ${contenidoNota}${btnEliminarNota}</li> `;
        listaNotas.innerHTML += htmlNota;
    });

    agregarAlStorage()

};

function agregarAlStorage(){
    localStorage.setItem('notas', JSON.stringify(notas))
}
function borrarNota(id){
    console.log("borrando",id);
    notas = notas.filter(nota=>nota.id !== id)
    notaHtml(notas)
    
}