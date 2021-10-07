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
        agregarFichaRedondaAzul();
        i ++;
    } else {
        agregarFichaRedondaRoja();
        i ++;
    }
    drawFicha();
}

function agregarFichaRedondaAzul() {
    let posX = width - 60;
    let posY = height - 60;
    let color = 'blue';

    let circulo = new FichaRedonda(posX, posY, 40, color, ctx);
    fichas.push(circulo);
}

function agregarFichaRedondaRoja() {
    let posX = 60;
    let posY = height - 60;
    let color = 'red';

    let circulo = new FichaRedonda(posX, posY, 40, color, ctx);
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
    dibujarTablero();
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
            
            ctx.fillStyle = 'green';
            
            ctx.fillRect(width / 4 - 100, 100 , 2 * (width / 4) + 200, height);
            //ctx.fillRect(aux - 100 + (x * tamañoancho), 100 + tamañoAlto * y , tamañoancho, tamañoAlto * (y + 1));
            

        }
    }
}


agregarFichas();




