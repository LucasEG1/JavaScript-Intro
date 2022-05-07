let cajaClicks = document.querySelector("#cajaClicks");
cajaClicks.addEventListener("click", agregarUno);

function agregarUno() {
    this.innerHTML ++;
}

let inTiempo = document.querySelector("#tiempo");
inTiempo.addEventListener("input", validarInput);

function validarInput(event){
    //VALIDAR INPUT DEBE MODIFICAR SI ES CORRECTO O NO CON CSS (como el ultimo form)
   
    
}

let btnEmpezar = document.querySelector("#btnEmpezar");
btnEmpezar.addEventListener("click", mostrarContenido);

function mostrarContenido() {
    let okTiempo;
    let okInput;

    let tiempo = parseInt(inTiempo.value);
    if (isNaN(tiempo) || tiempo < 1) {
        okInput = false;
    } else {
        okInput = true;
    }

    if (okInput == true) {
        okTiempo = confirm("El tiempo introducido es: " + inTiempo.value + ", correcto?");
    } else {
        alert("Debes introducir un tiempo válido para empezar.");
    }

    if (okTiempo == true){
        btnEmpezar.disable = true;
    }

}