"use strict";

let salta = false;
let caminaOSalta = document.getElementById("camina");

document.addEventListener('keydown', function(evento) {
    if(evento.keyCode == 32) {
        salta = true;
        cambiar(salta);
    }
});

function cambiar(salta){
    if(salta)
        caminaOSalta.setAttribute("class","salta");
    else
        caminaOSalta.setAttribute("class","camina");
}


caminaOSalta.addEventListener("animationend", function() {
    cambiar(false)
});
