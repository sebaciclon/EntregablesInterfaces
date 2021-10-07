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

//BOTONES PARA ELEGIR LAS FICHAS
let btn = document.getElementById("fichaNegra");
btn.addEventListener('click', fichaNegra);
let btn1 = document.getElementById("fichaRoja");
btn1.addEventListener('click', fichaRoja);
let btn2 = document.getElementById("fichaAzul");
btn2.addEventListener('click', fichaAzul);
let btn3 = document.getElementById("fichaVerde");
btn3.addEventListener('click', fichaVerde);

//FUNCIONES DEL MOUSE
canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mousemove', onMouseMove, false);

//METODO PARA AGREGAR UNA FICHA AL ARREGLO DE FICHAS
function agregarFicha(posX, posY, imgFicha) {
    let ficha = new FichaRedonda(posX, posY, 40, imgFicha, ctx);
    fichas.push(ficha); 
}

//METODO QUE DIBUJA LAS FICHAS EN EL CANVAS
function drawFicha() {
    limpiarCanvas();
    for(let i = 0; i < fichas.length; i ++) {
        fichas[i].draw();
    }
}

//METODO QUE LIMPIA EL CANVAS Y DIBUJA EL TABLERO
function limpiarCanvas() {
    ctx.clearRect(0, 0, width, height);
    dibujarTablero();
}

//METODO QUE DIBUJA EL TABLERO
function dibujarTablero() {
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
}

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
                agregarFicha(posX, posY - distancia, negra);
                distancia += 30;
            }
        }
        else {
            if(cont == 1) {
                cont ++;
                let posX = width - (width / 4 - 100) + (width / 4 - 100)/2;
                let posY = height - 60;
                
                for (let i = 0; i < cantFichas / 2; i++) {
                    agregarFicha(posX, posY - distancia, negra);
                    distancia += 30;
                }
            }
        }
        drawFicha();
    }
}

//METODO DEL BOTON DE ELECCION DE LAS FICHAS ROJAS
function fichaRoja() {
    if(cont == 2) {
        alert("ya eligieron fichas los dos jugadores");
    }
    else {
        btn1.style.display = 'none';
        let distancia = 0;
        let roja = document.getElementById("roja");
        //let roja = 'red';
        if(cont == 0) {
            cont ++;
            let posX = (width / 4 - 100) / 2;
            let posY = height - 60;
            
            for (let i = 0; i < cantFichas / 2; i++) {
                agregarFicha(posX, posY - distancia, roja);
                distancia += 30;
            }
        }
        else {
            if(cont == 1) {
                cont ++;
                let posX = width - (width / 4 - 100) + (width / 4 - 100)/2;
                let posY = height - 60;
                
                for (let i = 0; i < cantFichas / 2; i++) {
                    agregarFicha(posX, posY - distancia, roja);
                    distancia += 30;
                }
            }
        }
        drawFicha();
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
                agregarFicha(posX, posY - distancia, azul);
                distancia += 30;
            }
        }
        else {
            if(cont == 1) {
                cont ++;
                let posX = width - (width / 4 - 100) + (width / 4 - 100)/2;
                let posY = height - 60;
                
                for (let i = 0; i < cantFichas / 2; i++) {
                    agregarFicha(posX, posY - distancia, azul);
                    distancia += 30;
                }
            }
        }
        drawFicha();
    }
}





function findClickedFigura(x, y) {
    for(let i = 0; i < fichas.length; i ++) {
        const elemento = fichas[i];
        if(elemento.isPointInside(x, y)) {
            return elemento;
        }
    }
}

function onMouseDown(e) {
    mouse = true;

    if(clickearFicha != null) {
        clickearFicha.setResaltado(false);
        clickearFicha = null;
    }

    let clickFigura = findClickedFigura(e.layerX, e.layerY);
    if(clickFigura != null) {
        clickFigura.setResaltado(true);
        clickearFicha = clickFigura;
    }
    drawFicha();
}

function onMouseMove(e) {
    if(mouse && clickearFicha != null) {
        clickearFicha.setPosicion(e.layerX, e.layerY);
        drawFicha();
    }
}

function onMouseUp(e) {
    mouse = false;
}

dibujarTablero();







