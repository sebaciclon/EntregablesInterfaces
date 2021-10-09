"use strict";

/**@type {HTMLCanvasElement} */


//CANVAS
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;

//ARREGLO PARA GUARDAR LAS FICHAS
let fichas = [];

//VARIABLE PARA CONTROLAR QUE ELIJAN FICHAS LOS DOS JUGADORES SOLO UNA VEZ
let cont = 0;

//VARIABLES PARA USAR CON EL MOUSE
let clickearFicha = null;
let mouse = false;

//VARIABLES PARA EL TAMAÑO DEL TABLERO Y CANTIDAD DE FICHAS PARA EL JUEGO
let filas = 6;
let columnas = 7;
const cantFichas = filas * columnas;

//IMAGEN QUE VA A LLEVAR EL TABLERO
let casillero = document.getElementById("casillero");

//NOMBRE DE LOS JUGADORES
let jugador1 = "Jugador1";
let jugador2 = "Jugador2"

//BOTONES PARA ELEGIR LAS FICHAS
let btn = document.getElementById("fichaNegra");
btn.addEventListener('click', fichaNegra);
let btn1 = document.getElementById("fichaNaranja");
btn1.addEventListener('click', fichaNaranja);
let btn2 = document.getElementById("fichaAzul");
btn2.addEventListener('click', fichaAzul);
let btn3 = document.getElementById("fichaRoja");
btn3.addEventListener('click', fichaRoja);

//FUNCIONES DEL MOUSE
canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mousemove', onMouseMove, false);


let tablero = new Tablero(ctx, width, height, filas, columnas, casillero);
const tamanioCasillero = 90;
const marginTopTablero = 150;
tablero.drawTablero();


//************************************************************************************************** */

//REINICIAR TABLERO --> NO FUNCIONA
/*function reiniciar() {
    //dibujarTablero();
    limpiarCanvas();
    btn.style.display = 'inline';
    btn1.style.display = 'inline';
    btn2.style.display = 'inline';
    btn3.style.display = 'inline';
    cont = 0;
    
}*/

//****************************************************************************************************** */

//FICHAS

//METODO PARA AGREGAR UNA FICHA AL ARREGLO DE FICHAS
function agregarFicha(posX, posY, imgFicha, jugador) {
    let ficha = new FichaRedonda(posX, posY, 33, imgFicha, ctx, jugador);
    fichas.push(ficha); 
}

//METODO QUE DIBUJA LAS FICHAS EN EL CANVAS
function drawFichas() {
    limpiarCanvas();
    for(let i = 0; i < fichas.length; i ++) {
        fichas[i].draw();
    }
}

//******************************************************************************************************* */

//METODO QUE LIMPIA EL CANVAS Y DIBUJA EL TABLERO
function limpiarCanvas() {
    ctx.clearRect(0, 0, width, height);
    tablero.drawTablero();
}

//******************************************************************************************************* */

//METODO QUE DIBUJA EL TABLERO
/*function dibujarTablero() {
    //let i = (width - 200) / columnas;
    //let j = (height - 200) / filas;
    let aux = width / 4;
    let tamañoancho = (width / 2) / columnas;
    //console.log(tamañoancho);
    let tamañoAlto = (height - 100) / filas;
    //console.log(tamañoAlto);

    for(let x = 0; x < columnas; x++) {
        for(let y = 0; y < filas; y ++) {
            //ctx.rect(100 + 57 * i, 0 * 57, 57, 66);
            
            ctx.fillStyle = 'blue';
            let inicio = width / 4 - 100;
            let fin = width - inicio*2;
            ctx.fillRect(inicio, 100 , fin, height);
            //ctx.fillRect(width / 4 - 100, 100 , 2 * (width / 4) + 200, height);
            //ctx.fillRect(aux - 100 + (x * tamañoancho), 100 + tamañoAlto * y , tamañoancho, tamañoAlto * (y + 1));
        }
    }
}*/

//***************************************************************************************************** */

//METODO DEL BOTON DE ELECCION DE LAS FICHAS NEGRAS
function fichaNegra() {
    if(cont == 2) {
        alert("ya eligieron fichas los dos jugadores");
    }
    else {
        btn.style.display = 'none';
        let distancia = 0;
        let negra = document.getElementById("negra");
        //let negra = 'black';
        if(cont == 0) {
            cont ++;
            let posX = (width / 4 - 100) / 2;
            let posY = height - 60;
            
            for (let i = 0; i < cantFichas / 2; i++) {
                agregarFicha(posX, posY - distancia, negra, jugador1);
                distancia += 30;
            }
        }
        else {
            if(cont == 1) {
                cont ++;
                let posX = width - (width / 4 - 100) + (width / 4 - 100)/2;
                let posY = height - 60;
                
                for (let i = 0; i < cantFichas / 2; i++) {
                    agregarFicha(posX, posY - distancia, negra, jugador2);
                    distancia += 30;
                }
            }
        }
        drawFichas();
    }
}

//METODO DEL BOTON DE ELECCION DE LAS FICHAS ROJAS
function fichaNaranja() {
    if(cont == 2) {
        alert("ya eligieron fichas los dos jugadores");
    }
    else {
        btn1.style.display = 'none';
        let distancia = 0;
        let naranja = document.getElementById("naranja");
        //let roja = 'red';
        if(cont == 0) {
            cont ++;
            let posX = (width / 4 - 100) / 2;
            let posY = height - 60;
            
            for (let i = 0; i < cantFichas / 2; i++) {
                agregarFicha(posX, posY - distancia, naranja, jugador1);
                distancia += 30;
            }
        }
        else {
            if(cont == 1) {
                cont ++;
                let posX = width - (width / 4 - 100) + (width / 4 - 100)/2;
                let posY = height - 60;
                
                for (let i = 0; i < cantFichas / 2; i++) {
                    agregarFicha(posX, posY - distancia, naranja, jugador2);
                    distancia += 30;
                }
            }
        }
        drawFichas();
    }
}

//METODO DEL BOTON DE ELECCION DE LAS FICHAS AZULES
function fichaAzul() {
    if(cont == 2) {
        alert("ya eligieron fichas los dos jugadores");
    }
    else {
        btn2.style.display = 'none';
        let distancia = 0;
        let azul = document.getElementById("azul");
        //let azul = 'blue';
        if(cont == 0) {
            cont ++;
            let posX = (width / 4 - 100) / 2;
            let posY = height - 60;
            
            for (let i = 0; i < cantFichas / 2; i++) {
                agregarFicha(posX, posY - distancia, azul, jugador1);
                distancia += 30;
            }
        }
        else {
            if(cont == 1) {
                cont ++;
                let posX = width - (width / 4 - 100) + (width / 4 - 100)/2;
                let posY = height - 60;
                
                for (let i = 0; i < cantFichas / 2; i++) {
                    agregarFicha(posX, posY - distancia, azul, jugador2);
                    distancia += 30;
                }
            }
        }
        drawFichas();
    }
}

//METODO DEL BOTON DE ELECCION DE LAS FICHAS ROSAS
function fichaRoja() {
    if(cont == 2) {
        alert("ya eligieron fichas los dos jugadores");
    }
    else {
        btn2.style.display = 'none';
        let distancia = 0;
        let roja = document.getElementById("roja");
        //let azul = 'blue';
        if(cont == 0) {
            cont ++;
            let posX = (width / 4 - 100) / 2;
            let posY = height - 60;
            
            for (let i = 0; i < cantFichas / 2; i++) {
                agregarFicha(posX, posY - distancia, roja, jugador1);
                distancia += 30;
            }
        }
        else {
            if(cont == 1) {
                cont ++;
                let posX = width - (width / 4 - 100) + (width / 4 - 100)/2;
                let posY = height - 60;
                
                for (let i = 0; i < cantFichas / 2; i++) {
                    agregarFicha(posX, posY - distancia, roja, jugador2);
                    distancia += 30;
                }
            }
        }
        drawFichas();
    }
}

//*************************************************************************************************/

//FUNCIONES DEL MOUSE

//METODO QUE DEVUELVE UNA FICHA SI EL MOUSE ESTA DENTRO DE LA FIGURA
function findClickedFigura(x, y) {
    for(let i = 0; i < fichas.length; i ++) {
        const elemento = fichas[i];
        if(elemento.isPointInside(x, y)) {
            return elemento;
        }
    }
}

//METODO QUE CAMBIA LA DISPONIBILIDAD DE UNA FICHA PARA JUGARLA
function hacerDisponible(jugador) {
    for(let i = 0; i < fichas.length; i ++) {
        if(fichas[i].getJugador() == jugador) {
            fichas[i].setDisponible(true);
        } else {
            fichas[i].setDisponible(false);
        } 
    }
}

let juega = true;
//MIRAR ACA
function onMouseDown(e) {
    if(cont == 2) {
        
        mouse = true;
        console.log(juega);
        if(juega){
            hacerDisponible(jugador1);
        } else {
            hacerDisponible(jugador2);
        }
        if (clickearFicha != null) {// se dejó de seleccionar una ficha
            clickearFicha.setResaltado(false);
            clickearFicha = null;
        }
        let clickFigura = findClickedFigura(e.layerX, e.layerY);
        if (clickFigura != null && clickFigura.getDisponible()) {   
            clickFigura.setResaltado(true);
            clickearFicha = clickFigura;
        }
        drawFichas();
        
    }
}

function onMouseMove(e) {
    if(mouse && clickearFicha != null) {
        clickearFicha.setPosicion(e.layerX, e.layerY);
        drawFichas();
    }
}

function onMouseUp(e) {
    mouse = false;
    if(juega === true) {
        juega = false;
    } else {
        juega = true;
    }
    
}

//dibujarTablero();







