"use strict";

/**@type {HTMLCanvasElement} */

class Casillero{

    constructor (posX,posY){
        this.xInicial = posX;
        this.yInicial = posY;
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
}