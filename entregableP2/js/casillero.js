"use strict";

/**@type {HTMLCanvasElement} */

class Casillero{

    constructor (posX,posY,fila,col){
        this.xInicial = posX;
        this.yInicial = posY;
        this.fila = fila;
        this.col = col;
        this.ocupado = false;
        this.jugador = "Sin asignar";   //para saber a qué jugador pertenece la ficha, si hubiera
        
    }
    
    getJugador(){
        return this.jugador;
    }

    setJugador(jugador){
        this.jugador = jugador;
    }
    
    getXInicial(){
        return this.xInicial;
    }
    
    getYInicial(){
        return this.yInicial;
    }

    getPosition() {
        let posicion = [];
        posicion[0] = this.getPosX;
        posicion[1] = this.getPosY;
        return posicion;
    }
    
    getFila(){
        return this.fila;
    }

    getCol(){
        return this.col;
    }

    getOcupado(){
        return this.ocupado;
    }

    setOcupado(ocupado){
        this.ocupado = ocupado;
    }
}