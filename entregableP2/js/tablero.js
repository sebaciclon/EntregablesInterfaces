"use strict";

/**@type {HTMLCanvasElement} */

class Tablero{

    constructor(ctx, width, height, filas, columnas,img){
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        this.filas = filas;
        this.columnas = columnas;       
        this.imgCasillero = img;       
        //this.casilla = null;
        //this.matriz = [];
        this.zonaSueltaDeFichas = [];
        
    }

    //Dibuja el tablero y carga el arreglo de rangos para saber dónde se suelta cada ficha
    drawTablero(){
        let inicioX = this.width/4;
        let xInicial = this.width/4;
        for (let i = 0; i < this.columnas; i++) {
            let finX = tamanioCasillero + inicioX;
            let rango = [inicioX, finX];
            this.zonaSueltaDeFichas[i] = rango;
            inicioX = finX + 1;
            for (let j = 0; j <this.filas; j++) {
                this.ctx.beginPath();
                this.ctx.drawImage(this.imgCasillero, xInicial + i * tamanioCasillero, marginTopTablero + j * tamanioCasillero);
                this.ctx.fill();
                this.ctx.closePath();
            }
        }
        //console.log(this.zonaSueltaDeFichas);
    }

    //Devuelve la columna en la cual tiene que ir la ficha soltada. Si es un lugar inválido retorna -1
    getColunmaEnJuego(ficha){
        let x = ficha.getPosicionX();
        let y = ficha.getPosicionY();

        if(y > 0 && y < marginTopTablero) {
            for(let i=0; i<this.columnas; i++){
                if(x >= this.zonaSueltaDeFichas[i][0] && x <= this.zonaSueltaDeFichas[i][1])
                    return i;
            }
            return -1;
        }
    }

    

    /*dibujarFichaEnCasillero(ficha, xInicial, yInicial){
        let imagFicha = ficha.getFill();
        this.ctx.beginPath();
        this.ctx.drawImage(imagFicha, xInicial, yInicial);
        this.ctx.fill();
        this.ctx.closePath();
    }*/
}