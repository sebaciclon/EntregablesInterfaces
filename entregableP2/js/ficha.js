"use strict";

/**@type {HTMLCanvasElement} */

class Ficha {

    constructor(posX, posY, fill, ctx, jugador) {    //posicion x e y, imagen, contexto y jugador
        this.posX = posX;
        this.posY = posY;
        this.fill = fill;
        this.resaltado = false;             //variable para saber si la figura esta resaltada o no
        this.resaltadoEstilo = 'black';     //se puede agregar un metodo para cambiar de color
        this.ctx = ctx;
        this.jugador = jugador;
        this.disponible = true;
    }

    //metodo para modificar la variable jugador
    setJugador(jugador) {
        this.jugador = jugador
    }

    //obtengo el nombre del jugador
    getJugador() {
        return this.jugador;
    }

    //metodo para modificar la variable disponible
    setDisponible(disponible) {
        this.disponible = disponible
    }

    //obtengo si una ficha esta disponible o no
    getDisponible() {
        return this.disponible;
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
        this.ctx.fillStyle = "white";
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