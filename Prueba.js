let cajaClicks = document.querySelector("#cajaClicks");
cajaClicks.addEventListener("click", agregarUno);

function agregarUno() {
    this.innerHTML ++;
}

let inTiempo = document.querySelector("#inTiempo");
inTiempo.addEventListener("input", validarInput);

function validarInput() {
    //handle CSS here
}

let btnEmpezar = document.querySelector("#btnEmpezar");
btnEmpezar.addEventListener("click", iniciarClicker);

function iniciarClicker() {
    
    let okInput;
    let okTiempo;
    let tiempoTotal = parseInt(inTiempo.value);
    if (isNaN(tiempoTotal) || tiempoTotal < 1) {
        okInput = false;
    } else {
        okInput = true;
    }

    if (okInput == true) {
        let msg = "El tiempoTotal introducido es: " + inTiempo.value + ", correcto?";
        if (confirm(msg) == true){
            okTiempo = true;
            //btnEmpezar.style.display = "none";
            cuentaAtras();
        } else {
            okTiempo = false;
        }
    } else {
        alert("Debes introducir un tiempoTotal válido para empezar.");
    }
    
    /*if (okInput == true){
        return okTiempo;        
    } else {
        return okInput;
    }*/
    
}

function cuentaAtras() {
    let tiempoTotal = parseInt(inTiempo.value);
    let segs = document.querySelector("#contador");

    for (let i = tiempoTotal; i >= 0; i--) {
        
        function cambiarTiempo(){
            
            for (let i = tiempoTotal; i >= 0; i--) {
                segs.innerHTML = i;
                console.log(i);
            }
            
        }
        setInterval(cambiarTiempo, 1000);
    }
}