document.getElementById("cajaClicks").addEventListener("click", agregarUno);

function agregarUno() {
    this.innerHTML ++;
}
let inTiempo = document.querySelector("#tiempo");
inTiempo.addEventListener("input", validarInput);

let btnEmpezar = document.querySelector("#btnEmpezar");
btnEmpezar.addEventListener("click", mostrarContenido);

function mostrarContenido() {
    let okInput;
    let okTiempo;

    okInput = validarInput;
    if (okInput) {
        okTiempo = confirm("El tiempo introducido es: " + inTiempo.value + ", correcto?");
    } else {
        okTiempo = false;
        alert("Debes introducir un tiempo para empezar.");
    }

    if (okTiempo == true){
        btnEmpezar.disable = true;
    }

}

function validarInput(event){
    let tiempo = parseInt(inTiempo.value);
    console.log(tiempo);
    if (event.target != "" || event.target > 0) {
        return true;
    } else {
        return false;
    }
}
