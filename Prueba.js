let cajaClicks = document.querySelector("#cajaClicks");
cajaClicks.addEventListener("click", agregarUno);

function agregarUno() {
    this.innerHTML ++;
}

let inTiempo = document.querySelector("#tiempo");
inTiempo.addEventListener("input", validarInput);

function validarInput(e){
    
    let tiempo = parseInt(inTiempo.value);
    console.log(tiempo);
    /*if (inTiempo.value != NaN || inTiempo.value > 0) {
        return true;
    } else {
        return false;
    }*/

}

let btnEmpezar = document.querySelector("#btnEmpezar");
btnEmpezar.addEventListener("click", mostrarContenido);

function mostrarContenido() {
    let okTiempo;
    let okInput = validarInput("click");
    let edad;

    if (okInput == true) {
        okTiempo = confirm("El tiempo introducido es: " + inTiempo.value + ", correcto?");
    } else {
        okTiempo == false;
        alert("Debes introducir un tiempo para empezar.");
    }

    /*if (okTiempo == true){
        btnEmpezar.disable = true;
    }*/

}