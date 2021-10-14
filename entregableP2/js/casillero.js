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
}