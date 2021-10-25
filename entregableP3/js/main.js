"use strict";

let salta = false;
let muere = false;
let caminaOSalta = document.getElementById("camina");

document.addEventListener('keydown', function(evento) {
    if(evento.keyCode == 32) { //barra espaciadora
        salta = true;
        cambiar();
    }
    else
        if(evento.keyCode == 88) { // letra x
            muere = true;
            cambiar();
        }
});

function cambiar(){
    if(salta)
        caminaOSalta.setAttribute("class","salta");
    else
        if(muere)
            caminaOSalta.setAttribute("class","muere");
}


caminaOSalta.addEventListener("animationend", function() {
    if(!muere){
        salta = false;
        caminaOSalta.setAttribute("class","camina");
    }
});

function pierde(){ 
    let caminaPos = camina.getBoundingClientRect();
    let piedraPos = piedra.getBoundingClientRect();
    let tomaPos = tomaDeAgua.getBoundingClientRect();
    
    let piedraW = piedraPos.right + piedraPos.width; 
    let piedraH = piedraPos.top + piedraPos.height;
    let caminaW = caminaPos.right + caminaPos.width;
    let caminaH = caminaPos.top + caminaPos.height;
    let tomaAguaW = tomaPos.right + caminaPos.width;
    let tomaAguaH = tomaPos.top + tomaPos.height;
    
    if((caminaPos.right <= piedraW && caminaW >= piedraPos.right && caminaH >= piedraPos.top && caminaPos.top <= piedraH) 
        || (caminaPos.right <= tomaAguaW && caminaW >= tomaPos.right && caminaH >= tomaPos.top && caminaPos.top <= tomaAguaH)) {
        camina.setAttribute("class","muere");
    }
}



setInterval(pierde,300);

/*
let salta = false;
let muere = false;
let caminaOSalta = document.getElementById("camina");

document.addEventListener('keydown', function(evento) {
    if(evento.keyCode == 32) { //barra espaciadora
        salta = true;
        cambiar(salta);
    }
    else
        if(evento.keyCode == 88) { // letra x
            muere = true;
            cambiar(muere);
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
});*/