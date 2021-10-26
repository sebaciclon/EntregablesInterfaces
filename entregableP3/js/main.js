"use strict";

//VARIABLE USADA PARA CAMBIAR CLASES ENTRE SALTAR, HACERSE CHIQUITO Y CAMINAR
let salta = false;
let chiquito = false;
let caminaOSalta = document.getElementById("camina");
//
let muere = false;

//VARIABLE USADA PARA IR SUMANDO LOS PUNTOS CADA VEZ QUE AGARRA UNA MONEDA
let puntos = 0;
let puntosTotal = document.getElementById("puntos");
//VARIABLE USADA PARA IR DESCONTANDO VIDAS CADA VEZ QUE SE CHOCA UN OBSTACULO
let vidas = 3;
let vidasTotal = document.getElementById("vidas");



let fondo = document.getElementById("contenedor");
let sol = document.getElementById("sol");

//BOTON PARA CAMBIAR EL ESCENARIO DE DIA A NOCHE
let btn = document.getElementById("fondoNoche");
btn.addEventListener('click',fondoNoche);

//BOTON PARA CAMBIAR EL ESCENARIO DE NOCHE A DIA
let btn1 = document.getElementById("fondoDia");
btn1.addEventListener('click',fondoDia);

//METODO QUE SETEA LA CLASE "FONDONOCHE" Y OCULTA LA CLASE "SOL". ESTO PARA CAMBIAR EL ESCENARIO DE DIA A NOCHE
function fondoNoche() {
    fondo.setAttribute("class","fondoNoche");
    sol.classList.remove("sol");
}

//METODO QUE SETEA LA CLASE "CONTENEDOR" Y LA CLASE "SOL". ESTO PARA CAMBIAR EL ESCENARIO DE NOCHE A DIA
function fondoDia() {
    sol.setAttribute("class", "sol");
    fondo.setAttribute("class", "contenedor");
}

//METODO QUE DISPARA LA FUNCION PARA QUE EL NENE SALTE CUANDO SE PRECIONA LA BARRA ESPACIADORA
document.addEventListener('keydown', function(evento) {
    if(evento.keyCode == 32) { //barra espaciadora
        salta = true;
        cambiar();
    }
    else {
        if(evento.code == "ArrowDown") { //flecha abajo
            chiquito = true;
            cambiar();
        }
    }
});

//METODO QUE SE UTILIZA PARA QUE EL NENE SALTE O CAMINE
//SI LA VARIABLE SALTA ES TRUE SE SETEA LA CLASE SALTA, Y SI ES FALSE SE SETEA LA CLASE CAMINA
function cambiar(){
    if(salta)
        caminaOSalta.setAttribute("class","salta");
    else
        if(chiquito)
            caminaOSalta.setAttribute("class","chiquito");
        else
            caminaOSalta.setAttribute("class","camina");
}

//
caminaOSalta.addEventListener("animationend", function() {
    salta = false;
    chiquito = false;
    cambiar();
});

/*function pierde(){ 
    let posicionCaminar = camina.getBoundingClientRect();
    let posicionPiedra = piedra.getBoundingClientRect();
    let posicionToma = tomaDeAgua.getBoundingClientRect();
    
    let piedraW = posicionPiedra.left + posicionPiedra.width; 
    let piedraH = posicionPiedra.top + posicionPiedra.height;
    let caminaW = posicionCaminar.left + posicionCaminar.width -50;
    let caminaH = posicionCaminar.top + posicionCaminar.height - 50;
    let tomaAguaW = posicionToma.left + posicionToma.width;
    let tomaAguaH = posicionToma.top + posicionToma.height;
    
    if((posicionCaminar.left <= piedraW  && posicionCaminar.top <= piedraH && caminaW >= posicionPiedra.left && caminaH >= posicionPiedra.top) 
        || (posicionCaminar.left <= tomaAguaW  && posicionCaminar.top <= tomaAguaH && caminaW >= posicionToma.left && caminaH >= posicionToma.top)) {
            camina.setAttribute("class","muere");
            //restarVidas();
            if(restarVidas() == 0) {
                //hacer algo
            }
            //vidasTotal.innerHTML = vidas;
            //vidas --;
    }

    
}*/

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
        puntos = 0;
        puntosTotal.innerHTML = puntos;
        if(cantVidas == 0) {
            //hacer algo
        }
    }
}

function pierdePajaro(){ 
    let posicionCaminar = camina.getBoundingClientRect();
    let posicionPajaro = pajaro.getBoundingClientRect();
    
    let caminaW = posicionCaminar.left + posicionCaminar.width -50;
    let caminaH = posicionCaminar.top + posicionCaminar.height - 50;
    let pajaroW = posicionPajaro.left + posicionPajaro.width;
    let pajaroH = posicionPajaro.top + posicionPajaro.height;
    
    //if(posicionCaminar.left <= pajaroW  && posicionCaminar.top <= pajaroH && caminaW >= posicionPajaro.left && caminaH >= posicionPajaro.top) {
    if(posicionCaminar.left <= pajaroW  && posicionCaminar.top <= posicionPajaro.top && caminaW >= posicionPajaro.left && caminaH >= posicionPajaro.top) {
        camina.setAttribute("class","muere");
        let cantVidas = restarVidas();
        puntos = 0;
        puntosTotal.innerHTML = puntos;
        if(cantVidas == 0) {
            //hacer algo
        }

    }
}

/*function pierdeToma(){ 
    let posicionCaminar = camina.getBoundingClientRect();
    let posicionToma = tomaDeAgua.getBoundingClientRect();
    
    let caminaW = posicionCaminar.left + posicionCaminar.width -50;
    let caminaH = posicionCaminar.top + posicionCaminar.height - 50;
    let tomaAguaW = posicionToma.left + posicionToma.width;
    let tomaAguaH = posicionToma.top + posicionToma.height;
    
    if(posicionCaminar.left <= tomaAguaW  && posicionCaminar.top <= tomaAguaH && caminaW >= posicionToma.left && caminaH >= posicionToma.top) {
        camina.setAttribute("class","muere");
        let cantVidas = restarVidas();
        puntos = 0;
        puntosTotal.innerHTML = puntos;
        if(cantVidas == 0) {
            //hacer algo
        }

    }
}*/

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
        moneda.setAttribute("class","agarraMoneda");
        setTimeout(mostrarMonedaArriba, 2000);
        

    }
     
}

function mostrarMonedaArriba(){
    moneda.setAttribute("class","moneda");
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
        moneda1.setAttribute("class","agarraMoneda1");
        setTimeout(mostrarMonedaAbajo, 2000);
    }
}
  
function mostrarMonedaAbajo(){
    moneda1.setAttribute("class","moneda1");
}


/*function sumarPuntos() {
    let posicionCaminar = camina.getBoundingClientRect();
    let posicicionMoneda = moneda.getBoundingClientRect();
    let posicicionMoneda1 = moneda1.getBoundingClientRect();
    console.log(posicionCaminar);
    console.log(posicicionMoneda);

    let caminaW = posicionCaminar.left + posicionCaminar.width;
    let caminaH = posicionCaminar.top + posicionCaminar.height;
    let monedaW = posicicionMoneda.left + posicicionMoneda.width; 
    let monedaH = posicicionMoneda.top + posicicionMoneda.height;
    let moneda1W = posicicionMoneda1.left + posicicionMoneda1.width; 
    let moneda1H = posicicionMoneda1.top + posicicionMoneda1.height;
    

    //if(posicionCaminar.left <= monedaW  && posicionCaminar.top <= monedaH && caminaW >= posicicionMoneda.left && caminaH >= posicicionMoneda.top) {
    if(posicionCaminar.left <= monedaW  && posicionCaminar.top <= posicicionMoneda.top && caminaW >= posicicionMoneda.left && caminaH >= posicicionMoneda.top) {
       sumar();
        //camina.setAttribute("class","muere");
    }
    if(posicionCaminar.left <= moneda1W  && posicionCaminar.top <= posicicionMoneda1.top && caminaW >= posicicionMoneda1.left && caminaH >= posicicionMoneda1.top) {
        sumar();
    
    }
}*/

function sumar() {
    puntos += 10;
    puntosTotal.innerHTML = puntos;
}

function restarVidas() {
    vidas --;
    vidasTotal.innerHTML = vidas;
}

setInterval(pierdePiedra,250);
//setInterval(pierdeToma,1000);
setInterval(pierdePajaro, 500);
setInterval(sumarPuntosArriba, 500);
setInterval(sumarPuntosAbajo, 500);





    

    




