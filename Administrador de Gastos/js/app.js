// VARIABLES
const formulario = document.querySelector('#agregar-gasto');
const gastosListado = document.querySelector('.list-group');
const totalHtml = document.querySelector('#total');
const restanteHtml = document.querySelector('#restante');
const nombreGasto = document.querySelector('#gasto');
const cantidadGasto = document.querySelector('#cantidad');
const primario = document.querySelector('.primario');




//EVENTOS
document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
formulario.addEventListener('submit', agregarGasto );




//CLASES
// Esta clase maneja todo lo que es los datos
class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    };
    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }
    calcularRestante(){
        const gastado = this.gastos.reduce((total, gasto)=> total + gasto.cantidad, 0 );
        this.restante = this.presupuesto - gastado;
    };
    eliminarGasto(id){
        this.gastos = this.gastos.filter(gasto=> gasto.id !== id)
        this.calcularRestante();
    };
};
// Esta clase maneja todo lo que es la interfaz de usuario(Ui)
class Ui{
    insertarPresupuesto(cantidad){
        const {presupuesto, restante} = cantidad;
        totalHtml.textContent = presupuesto;
        restanteHtml.textContent = restante;
    };
    imprimirAlerta(mensaje, tipo){
        if(tipo==='error'){
            tipo = 'alert-danger';
        }else{
            tipo = 'alert-success';
        };
        let divMensaje =  `<div class="text-center alert ${tipo}">${mensaje}</div> `; 
        primario.innerHTML += divMensaje;
        setTimeout(()=>{
            primario.innerHTML = "";
        },3000)
    };
    agregarGastoHtml(gasto){
        gastosListado.innerHTML = "";
        gasto = gasto.map((gasto)=>{
            const {nombre, cantidad, id} = gasto;
            const btnEliminar = `<button onclick="eliminarGasto(${id})" class="btn btn-danger borrar-gasto">x</button>`;
            const elementoGasto = `<li class="list-group-item d-flex justify-content-between align-items-center" data-id="${id}">${nombre}<span class="badge badge-primary badge-pill">$${cantidad}</span> ${btnEliminar}</li> `;
            gastosListado.innerHTML += elementoGasto ;
        })
    };
    actualizarRestante(restante){
        restanteHtml.textContent = restante;
    };
    comprobarPresupuesto(presupuestoObj){
        const {presupuesto, restante} = presupuestoObj;
        
        //Comprobar si se gasto el 75%
        if ((presupuesto / 4) > restante){
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success', 'alert-warning');
            restante.classList.add('alert-danger');
        }else if((presupuesto /2 )> restante){
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success');
            restante.classList.add('alert-warning');
        }else{
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-danger', 'alert-warning');
            restante.classList.add('alert-success');
        }
        // Si el gasto es menor a 0
        if(restante < 0){
            ui.imprimirAlerta('Lo que se gaste de más se descontara de la proxima semana','error')
        }
    };

};
// Instamciar
let presupuesto; // variable global que tiene instanciada la clase Presupuesto y trae los datos para poder utilizarlos de manera global
const ui = new Ui(); // variable global que tiene instanciada la clase Ui y trae los metodos para poder utilizarlos de manera global


//FUNCIONES

function preguntarPresupuesto(){
    // Obtenemos el presupuesto del usuario
    const presupuestoUsuario = prompt('Cual es tu presupuesto?');
    //Validicacion del presupuesto(que no sea un string vacio, que no sea nulo, una letra/palabra y menor igual a 0 )
    if(presupuestoUsuario === "" || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload();
    };
    // Instanciamos la clase Presupuesto y le asignamos el presupuesto ya validado a la variable global para poder utilizarla en cualquier parte 
    presupuesto = new Presupuesto(presupuestoUsuario);
    ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e){
    e.preventDefault();
    const nombre = nombreGasto.value;
    const cantidad = Number(cantidadGasto.value);
    if(nombre === "" || cantidad === "" ){
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    }else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no válida', 'error');
        return;
    }else{
        ui.imprimirAlerta('correcto', 'correcto');
        formulario.reset()
    }
    // Generamos el objeto que lleva el nombre, cantidad y id del gasto que se cargo
    const gasto =  {nombre, cantidad, id: Date.now()}
    //Se lo pasamos a la clase presupuesto para registrar los datos
    presupuesto.nuevoGasto(gasto)
    //Aplicamos destructuring del objeto para no llevarlo todo ya que solo necesitamos los gastos
    const {gastos, restante } = presupuesto;
    ui.agregarGastoHtml(gastos);
    ui.actualizarRestante (restante);
    ui.comprobarPresupuesto(presupuesto);
};
function eliminarGasto(id){
    //Elimina del objeto
    presupuesto.eliminarGasto(id)
    //Elimina del HTML
    const {gastos, restante} = presupuesto;
    ui.agregarGastoHtml(gastos);
    ui.actualizarRestante (restante);
    ui.comprobarPresupuesto(presupuesto);
};