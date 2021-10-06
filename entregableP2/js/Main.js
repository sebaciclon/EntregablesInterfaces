"use strict";

/**@type {HTMLCanvasElement} */

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;

let fichas = [];
let clickearFicha = null;
let mouse = false;

let filas = 6;
let columnas = 7;
const cantFichas = filas * columnas;
let i = 0;

canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mousemove', onMouseMove, false);

function agregarFicha() {
    if(i < cantFichas / 2) {
        
        agregarFichaCuadrada();
        i ++;
    } else {
        agregarFichaRedonda();
            
            i ++;
        
    }

    drawFicha();
}

function agregarFichaCuadrada() {
    let posX = width - 30;
    let posY = height - 30;
    let color = 'blue';

    let cuadrado = new FichaCuadrada(posX, posY, 20, 20, color, ctx);
    fichas.push(cuadrado);
}

function agregarFichaRedonda() {
    let posX = 20;
    let posY = height - 20;
    let color = 'red';

    let circulo = new FichaRedonda(posX, posY, 10, color, ctx);
    fichas.push(circulo);
}

function agregarFichas() {
    agregarFicha();
    if(fichas.length < cantFichas) {
        agregarFichas();
    }
}

function drawFicha() {
    limpiarCanvas();
    for(let i = 0; i < fichas.length; i ++) {
        fichas[i].draw();
    }
}

function limpiarCanvas() {
    ctx.clearRect(0, 0, width, height);
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




agregarFichas();




