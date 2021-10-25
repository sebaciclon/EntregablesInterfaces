"use strict";

let salta = false;
let muere = false;
let puntos = 0;
let vidas = 3;
let vidasTotal = document.getElementById("vidas");
let puntosTotal = document.getElementById("puntos");
let caminaOSalta = document.getElementById("camina");

document.addEventListener('keydown', function(evento) {
    if(evento.keyCode == 32) { //barra espaciadora
        salta = true;
        cambiar();
    }
    /*else
        if(evento.keyCode == 88) { // letra x
            muere = true;
            cambiar();
        }*/
});

function cambiar(){
    if(salta)
        caminaOSalta.setAttribute("class","salta");
    else
        //if(muere)
            caminaOSalta.setAttribute("class","camina");
}


caminaOSalta.addEventListener("animationend", function() {
    //if(!muere){
        salta = false;
        caminaOSalta.setAttribute("class","camina");
    //}
});


    //restar pixeles al muñeco
function pierde(){ 
    let posicionCaminar = camina.getBoundingClientRect();
    let posicionPiedra = piedra.getBoundingClientRect();
    let posicionToma = tomaDeAgua.getBoundingClientRect();
    
    let piedraW = posicionPiedra.right + posicionPiedra.width; 
    let piedraH = posicionPiedra.top + posicionPiedra.height;
    let caminaW = posicionCaminar.right + posicionCaminar.width;
    let caminaH = posicionCaminar.top + posicionCaminar.height;
    let tomaAguaW = posicionToma.right + posicionToma.width;
    let tomaAguaH = posicionToma.top + posicionToma.height;
    
    if((posicionCaminar.right <= piedraW  && posicionCaminar.top <= piedraH && caminaW >= posicionPiedra.right && caminaH >= posicionPiedra.top) 
        || (posicionCaminar.right <= tomaAguaW  && posicionCaminar.top <= tomaAguaH && caminaW >= posicionToma.right && caminaH >= posicionToma.top)) {
            camina.setAttribute("class","muere");
            restarVidas();
            if(restarVidas() == 0) {
                //hacer algo
            }
    }
}






function sumarPuntos() {
    let posicionCaminar = camina.getBoundingClientRect();
    let posicicionMoneda = moneda.getBoundingClientRect();
    console.log(posicionCaminar);
    console.log(posicicionMoneda);
    
    let monedaW = posicicionMoneda.left + posicicionMoneda.width; 
    let monedaH = posicicionMoneda.top + posicicionMoneda.height;
    let caminaW = posicionCaminar.left + posicionCaminar.width;
    let caminaH = posicionCaminar.top + posicionCaminar.height;

    //if(posicionCaminar.left <= monedaW  && posicionCaminar.top <= monedaH && caminaW >= posicicionMoneda.left && caminaH >= posicicionMoneda.top) {
    if(posicionCaminar.left <= monedaW  && posicionCaminar.top <= posicicionMoneda.top && caminaW >= posicicionMoneda.left && caminaH >= posicicionMoneda.top) {
        sumar();
        //camina.setAttribute("class","muere");
    }
}

function sumar() {
    puntos = puntos + 10;
    puntosTotal.innerHTML = puntos;
}

function restarVidas() {
    vidas --;
    vidasTotal.innerHTML = vidas;
}





setInterval(pierde,300);
setInterval(sumarPuntos, 300);

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