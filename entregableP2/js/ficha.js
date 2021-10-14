"use strict";

/**@type {HTMLCanvasElement} */

class Ficha {

    //CONSTRUCTOR DE LA CLASE
    constructor(posX, posY, fill, ctx, nombreJugador, numJugador) {    //posicion x e y, imagen, contexto y jugador
        this.posX = posX;
        this.posY = posY;
        this.fill = fill;
        this.resaltado = false;             //variable para saber si la figura esta resaltada o no
        this.resaltadoEstilo = 'black';     //se puede agregar un metodo para cambiar de color
        this.ctx = ctx;
        this.nombreJugador = nombreJugador;
        this.numJugador = numJugador;
        this.disponible = true;
        this.fichaJugada = false;
    }

    //OBTENGO SI UNA FICHA YA ESTA JUGADA EN EL TABLERO (TRUE) O NO (FALSE)
    getFichaJugada() {
        return this.fichaJugada;
    }

    //METEDO PARA CAMBIAR EL ESTADO DE UNA FICHA, JUGADA O NO
    setFichaJugada(fichaJugada) {
        this.fichaJugada = fichaJugada;
    }

    //OBTENGO EL NOMBRE DEL JUGADOR
    getNombreJugador() {
        return this.nombreJugador;
    }

    //OBTENGO EL NUMERO DEL JUGADOR, 1 JUGADOR 1, 2 JUGADOR 2
    getNumeroJugador() {
        return this.numJugador;
    }

    //metodo para modificar la variable disponible
    setDisponible(disponible) {
        this.disponible = disponible
    }

    //OBTENGO SI UNA FICHA ESTA DISPONIBLE O NO PARA JUGARLA
    getDisponible() {
        return this.disponible;
    }

    //MOTODO PARA MODIFICAR LA VARIABLE FILL
    setFill(fill) {
        this.fill = fill;
    }

    //OBTENGO EL COLOR QUE ESTA PINTADA LA FICHA
    getFill() {
        return this.fill;
    }

    //SETEA LA NUEVA POSICION DE LA FICHA CUANDO LA MUEVO
    setPosicion(x, y) {
        this.posX = x;
        this.posY = y;
    }

    //OBTENGO LAS COORDENADAS X E Y DE LA FICHA
    getPosicion() {
        return {
            x: this.getPosicionX(),
            y: this.getPosicionY()
        };
    }

    //OBTENGO LA COORDENADA EN X DE LA FICHA
    getPosicionX() {
        return this.posX;
    }

    //OBTENGO LA COORDENADA EN Y DE LA FICHA
    getPosicionY() {
        return this.posY;
    }

    //METODO PARA DIBUJAR
    draw() {
        this.ctx.fillStyle = "white";
        this.ctx.fillStyle = this.fill;
    }

    //SETEA SI LA FICHA ESTA RESALTADA
    setResaltado(resaltado) {
        this.resaltado = resaltado;
    }

    //METODO ABSTRACTO QUE DICE SI EL MOUSE ESTA DENTRO DE LA FICHA O NO
    isPointInside(x, y) {

    }
}