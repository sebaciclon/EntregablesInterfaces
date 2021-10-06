"use strict";

/**@type {HTMLCanvasElement} */

class Ficha {

    constructor(posX, posY, fill, ctx) {    //posicion x e y, color y el contexto
        this.posX = posX;
        this.posY = posY;
        this.fill = fill;
        this.resaltado = false;             //variable para saber si la figura esta resaltada o no
        this.resaltadoEstilo = 'black';     //se puede agregar un metodo para cambiar de color
        this.ctx = ctx;
    }

    //metodo para modificar la variable fill
    setFill(fill) {
        this.fill = fill;
    }

    //obtengo el color que esta pintada la ficha
    getFill() {
        return this.fill;
    }

    //setea la nueva posicion de la ficha cuando la muevo
    setPosicion(x, y) {
        this.posX = x;
        this.posY = y;
    }

    //obtengo las coordenadas de la ficha
    getPosicion() {
        return {
            x: this.getPosicionX(),
            y: this.getPosicionY()
        };
    }

    getPosicionX() {
        return this.posX;
    }

    getPosicionY() {
        return this.posY;
    }

    //dibuja
    draw() {
        this.ctx.fillStyle = this.fill;
    }

    //setea si la ficha esta resaltada
    setResaltado(resaltado) {
        this.resaltado = resaltado;
    }

    //metodo abstracto que me dice si el mouse esta adentro de la figura o no
    isPointInside(x, y) {

    }
}