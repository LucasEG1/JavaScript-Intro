/*VARIABLES*/ /*VARIABLES*//*VARIABLES*//*VARIABLES*//*VARIABLES*/
/*VARIABLES*//*VARIABLES*//*VARIABLES*//*VARIABLES*//*VARIABLES*/
/*VARIABLES*//*VARIABLES*//*VARIABLES*//*VARIABLES*//*VARIABLES*/
let cajaClicks = document.querySelector("#cajaClicks");

let btnEmpezar = document.querySelector("#btnEmpezar");
btnEmpezar.addEventListener("click", inicializarCuentaAtras);

let dispHora = document.querySelector("#displayHora");



/*FUNCIONES*//*FUNCIONES*//*FUNCIONES*//*FUNCIONES*//*FUNCIONES*/
/*FUNCIONES*//*FUNCIONES*//*FUNCIONES*//*FUNCIONES*//*FUNCIONES*/
/*FUNCIONES*//*FUNCIONES*//*FUNCIONES*//*FUNCIONES*//*FUNCIONES*/
function permitirClicks() {cajaClicks.addEventListener("click", agregarUno)};

function restringirClicks() {cajaClicks.removeEventListener("click", agregarUno)};

window.onload = mostrarFecha();
window.onload = restringirClicks();

function mostrarFecha() {
    const thisdate = new Date();
    let seg = thisdate.getSeconds();
    let min = thisdate.getMinutes();
    let hora = thisdate.getHours();
    let horaActual = hora + " : " + min + " : " + seg;

    dispHora.innerHTML = "Son las " + horaActual;
    setTimeout(mostrarFecha, 500);

}

function agregarUno() {
    this.innerHTML++;
    this.value++;
}

function inicializarCuentaAtras() {
    btnEmpezar.disabled = true;
    permitirClicks();
    let tiempoTotal = parseInt(inTiempo.value);
    let segs = document.querySelector("#tiempoRestante");
    segs.innerHTML = tiempoTotal;
    let cuentaAtras = setInterval(function () {
        if (tiempoTotal <= 1) {
            clearInterval(cuentaAtras);
            restringirClicks();
            mostrarPuntuacion();
            btnEmpezar.disabled = false;
            segs.innerHTML = "⬆⬆ Selecciona un tiempo para empezar";
        } else {
        tiempoTotal --;
        segs.innerHTML = tiempoTotal; //muestra el tiempo restante cada segundo que pasa
        }
    }, 1000);

}
function mostrarPuntuacion() {
    let clicks = parseInt(cajaClicks.value);
    let tiempo = parseInt(inTiempo.value);

    alert("El tiempo ha acabado! Conseguiste " + clicks + " clicks en " + tiempo + " segundos, con una media de " + clicks/tiempo + " clicks por segundo.");
    cajaClicks.value = 0;
    cajaClicks.innerHTML = 0;
}