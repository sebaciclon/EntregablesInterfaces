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
function pierdePiedra(){ 
    let posicionCaminar = camina.getBoundingClientRect();
    let posicionPiedra = piedra.getBoundingClientRect();
    
    let piedraW = posicionPiedra.left + posicionPiedra.width; 
    let piedraH = posicionPiedra.top + posicionPiedra.height;
    let caminaW = posicionCaminar.left + posicionCaminar.width -50;
    let caminaH = posicionCaminar.top + posicionCaminar.height - 50;
        
    if(posicionCaminar.left <= piedraW  && posicionCaminar.top <= piedraH && caminaW >= posicionPiedra.left && caminaH >= posicionPiedra.top) {
        camina.setAttribute("class","muere");
        let cantVidas = restarVidas();
        if(cantVidas == 0) {
            //hacer algo
        }
    }
}

function pierdeToma(){ 
    let posicionCaminar = camina.getBoundingClientRect();
    let posicionToma = tomaDeAgua.getBoundingClientRect();
    
    let caminaW = posicionCaminar.left + posicionCaminar.width -50;
    let caminaH = posicionCaminar.top + posicionCaminar.height - 50;
    let tomaAguaW = posicionToma.left + posicionToma.width;
    let tomaAguaH = posicionToma.top + posicionToma.height;
    
    if(posicionCaminar.left <= tomaAguaW  && posicionCaminar.top <= tomaAguaH && caminaW >= posicionToma.left && caminaH >= posicionToma.top) {
        camina.setAttribute("class","muere");
        let cantVidas = restarVidas();
        if(cantVidas == 0) {
            //hacer algo
        }

    }
}

function sumarPuntosArriba() {
    let posicionCaminar = camina.getBoundingClientRect();
    let posicicionMoneda = moneda.getBoundingClientRect();
    
    let caminaW = posicionCaminar.left + posicionCaminar.width;
    let caminaH = posicionCaminar.top + posicionCaminar.height;
    let monedaW = posicicionMoneda.left + posicicionMoneda.width; 
    let monedaH = posicicionMoneda.top + posicicionMoneda.height;
    
    //if(posicionCaminar.left <= monedaW  && posicionCaminar.top <= monedaH && caminaW >= posicicionMoneda.left && caminaH >= posicicionMoneda.top) {
    if(posicionCaminar.left <= monedaW  && posicionCaminar.top <= posicicionMoneda.top && caminaW >= posicicionMoneda.left && caminaH >= posicicionMoneda.top) {
       sumar();
        //camina.setAttribute("class","muere");
    }
    
}

function sumarPuntosAbajo() {
    let posicionCaminar = camina.getBoundingClientRect();
    let posicicionMoneda1 = moneda1.getBoundingClientRect();
    

    let caminaW = posicionCaminar.left + posicionCaminar.width;
    let caminaH = posicionCaminar.top + posicionCaminar.height;
    let moneda1W = posicicionMoneda1.left + posicicionMoneda1.width; 
    let moneda1H = posicicionMoneda1.top + posicicionMoneda1.height;
    
    if(posicionCaminar.left <= moneda1W  && posicionCaminar.top <= posicicionMoneda1.top && caminaW >= posicicionMoneda1.left && caminaH >= posicicionMoneda1.top) {
        sumar();
    
    }
}

setInterval(pierdePiedra,250);
setInterval(pierdeToma,1000);
setInterval(sumarPuntosArriba, 500);
setInterval(sumarPuntosAbajo, 500);







function sumar() {
    puntos = puntos + 10;
    puntosTotal.innerHTML = puntos;
}

function restarVidas() {
    vidas --;
    vidasTotal.innerHTML = vidas;
}







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