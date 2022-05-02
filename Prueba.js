document.getElementById("empezar").addEventListener("click", agregarUno);
function agregarUno() {
    this.innerHTML ++;
}
let btnEmpezar = document.getElementById("btnEmpezar");
btnEmpezar.onclick = updateClock;//prompt("Cuánto tiempo tendrás?");
function inicializarContador () {
    updateClock;
    btnEmpezar.style.setProperty("disabled");
}

function updateClock() {
    let totalTime = 10;
    for (let i = 0; i < totalTime; i--) {
        document.getElementById('contador').innerHTML = i;
        if(totalTime==0){
            alert("Fin");
            //const cuantosClicks = document.getElementById("empezar");
        }else{
            setTimeout("updateClock()",1000);
        }
        
    }
}