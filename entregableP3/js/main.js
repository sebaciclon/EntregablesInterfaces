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