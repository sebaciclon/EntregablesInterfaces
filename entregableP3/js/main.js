"use strict";

//VARIABLES USADA PARA CAMBIAR CLASES ENTRE SALTAR, HACERSE CHIQUITO Y CAMINAR
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

//VARIABLES USADAS PARA CAMBIAR EL ESCENARIO, YA SEA NOCHE O DIA
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
//O SE HAGA CHIQUITO CUANDO SE PRECIONA LA FLECHA PARA ABAJO
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

//METODO QUE SE UTILIZA PARA QUE EL NENE SALTE, CAMINE O SE HAGA CHIQUITO
//SI LA VARIABLE SALTA ES TRUE SE SETEA LA CLASE SALTA Y EL PERSONAJE SALTA,
//SI LA VARIABLE CHIQUITO ES TRUE SE SETEA LA CLASE CHIQUITO Y EL PERSONAJE SE ENCOJE,
//Y SI LAS DOS SON FALSE EL PERSONAJE CAMINA
function cambiar(){
    if(salta)
        caminaOSalta.setAttribute("class","salta");
    else
        if(chiquito)
            caminaOSalta.setAttribute("class","chiquito");
        else
            caminaOSalta.setAttribute("class","camina");
}

//SI EL NENE SALTA O SE HIZO CHIQUITO, SE VUELVEN LAS VARIABLES SALTA Y CHIQUITO A FALSE
//Y SE LLAMA LA FUNCION CAMBIAR() PARA QUE SIGA CAMINANDO
caminaOSalta.addEventListener("animationend", function() {
    salta = false;
    chiquito = false;
    cambiar();
});

//METODO QUE SE FIJA SI EL NENE SE CHOCA UNA PIEDRA PARA RESTARLE UNA VIDA
//SE OBTIENEN LAS POSCIONES DE EL NENE Y LA PIEDRA Y SE LAS COMPARA,
//SI LAS POSICIONES COINCIDEN SIGNIFICA QUE EL NENE SE CHOCO UNA PIEDRA,
//Y SINO SIGNIFICA QUE LA SALTO O AUN NO ESTA LA PIEDRA EN SU POSICION
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
        restarVidas();
        if(vidas == 0) {
            //hacer algo
            //setTimeout(gameOver(),3000);
            detenerAnimaciones();
            swal('GAME OVER ', 'Perdió todos sus vidas!!!', 'success');
        }
    }
}

//METODO QUE SE FIJA SI EL NENE SE CHOCA EL PAJARO PARA RESTARLE UNA VIDA
//SE OBTIENEN LAS POSCIONES DE EL NENE Y EL PAJARO Y SE LAS COMPARA,
//SI LAS POSICIONES COINCIDEN SIGNIFICA QUE EL NENE SE CHOCO EL PAJARO,
//Y SINO SIGNIFICA QUE SE HIZO CHIQUITO O AUN NO ESTA EL PAJARO EN SU POSICION
function pierdePajaro(){ 
    let posicionCaminar = camina.getBoundingClientRect();
    let posicionPajaro = pajaro.getBoundingClientRect();
    
    let caminaW = posicionCaminar.left + posicionCaminar.width -50;
    let caminaH = posicionCaminar.top + posicionCaminar.height - 50;
    let pajaroW = posicionPajaro.left + posicionPajaro.width;
    
    if(posicionCaminar.left <= pajaroW  && posicionCaminar.top <= posicionPajaro.top && caminaW >= posicionPajaro.left && caminaH >= posicionPajaro.top) {
        restarVidas();
        camina.setAttribute("class","muere");
        if(vidas == 0) {
            //setTimeout(gameOver(),3000);
            detenerAnimaciones();
            swal('GAME OVER ', 'Perdió todos sus vidas!!!', 'success');
        }
        
    }
}

function gameOver(){
    camina.setAttribute("class","muere");
    //pausarAnimaciones();
    swal('GAME OVER ', 'Perdió todos sus vidas!!!', 'success');
}

//METODO QUE SE FIJA SI EL NENE "AGARRA" LA MONEDA MAS ALTA PARA SUMAR PUNTOS
//SE OBTIENEN LAS POSCIONES DE EL NENE Y LA MONEDA MAS ALTA Y SE LAS COMPARA,
//SI LAS POSICIONES COINCIDEN SIGNIFICA QUE EL NENE "AGARRO" LA MONEDA,
//Y SINO SIGNIFICA QUE NO LA PUEDO AGARRAR
function sumarPuntosArriba() {
    let posicionCaminar = camina.getBoundingClientRect();
    let posicicionMoneda = moneda.getBoundingClientRect();
    
    let caminaW = posicionCaminar.left + posicionCaminar.width;
    let caminaH = posicionCaminar.top + posicionCaminar.height;
    let monedaW = posicicionMoneda.left + posicicionMoneda.width; 
    
    if(posicionCaminar.left <= monedaW  && posicionCaminar.top <= posicicionMoneda.top && caminaW >= posicicionMoneda.left && caminaH >= posicicionMoneda.top) {
       sumar();
        moneda.setAttribute("class","agarraMoneda");
        setTimeout(mostrarMonedaArriba, 2000);
    }
}

//METODO QUE MUESTRA LA CLASE MONEDA, EN ESTE CASO LA MONEDA MAS ALTA
function mostrarMonedaArriba(){
    moneda.setAttribute("class","moneda");
}

//METODO QUE SE FIJA SI EL NENE "AGARRA" LA MONEDA MAS BAJA PARA SUMAR PUNTOS
//SE OBTIENEN LAS POSCIONES DE EL NENE Y LA MONEDA MAS BAJA Y SE LAS COMPARA,
//SI LAS POSICIONES COINCIDEN SIGNIFICA QUE EL NENE "AGARRO" LA MONEDA,
//Y SINO SIGNIFICA QUE NO LA PUEDO AGARRAR
function sumarPuntosAbajo() {
    let posicionCaminar = camina.getBoundingClientRect();
    let posicicionMoneda1 = moneda1.getBoundingClientRect();
    
    let caminaW = posicionCaminar.left + posicionCaminar.width;
    let caminaH = posicionCaminar.top + posicionCaminar.height;
    let moneda1W = posicicionMoneda1.left + posicicionMoneda1.width; 
    
    if(posicionCaminar.left <= moneda1W  && posicionCaminar.top <= posicicionMoneda1.top && caminaW >= posicicionMoneda1.left && caminaH >= posicicionMoneda1.top) {
        sumar();
        moneda1.setAttribute("class","agarraMoneda1");
        setTimeout(mostrarMonedaAbajo, 2000);
    }
}

//METODO QUE MUESTRA LA CLASE MONEDA, EN ESTE CASO LA MONEDA MAS BAJA
function mostrarMonedaAbajo(){
    moneda1.setAttribute("class","moneda1");
}

//METODO QUE SUMA 10 PUNTOS Y LO MUESTRA EN PANTALLA
function sumar() {
    puntos += 10;
    puntosTotal.innerHTML = puntos;
}

//METODO QUE RESTA UNA VIDA Y LO MUESTRA EN PANTALLA
function restarVidas() {
    vidas --;
    vidasTotal.innerHTML = vidas;
}

function detenerAnimaciones(){
    nubes.style.animationPlayState = "paused";
    sol.style.animationPlayState = "paused";
    ciudad.style.animationPlayState = "paused";
    camina.style.animationPlayState = "paused";
    moneda.style.animationPlayState = "paused";
    moneda1.style.animationPlayState = "paused"; 
    piedra.style.animationPlayState = "paused"; 
    pajaro.style.animationPlayState = "paused"; 
}

/*setInterval(pierdePiedra,250);

setInterval(pierdePajaro, 500);
setInterval(sumarPuntosArriba, 500);
setInterval(sumarPuntosAbajo, 500);*/

function inicioJuego() {
    setInterval(pierdePiedra,250);
    setInterval(pierdePajaro, 500);
    setInterval(sumarPuntosArriba, 500);
    setInterval(sumarPuntosAbajo, 500);
}

inicioJuego();






    

    




