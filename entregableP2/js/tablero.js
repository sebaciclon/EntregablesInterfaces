"use strict";

/**@type {HTMLCanvasElement} */

class Tablero{

    constructor(ctx, width, height, filas, columnas,img, inicioTableroX){
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        this.filas = filas;
        this.columnas = columnas;       
        this.imgCasillero = img;       
        //this.casilla = null;
        //this.matriz = [];
        this.zonaSueltaDeFichas = [];
        this.inicioTableroX = inicioTableroX;
        this.matrizJuego = [];      //esta
        this.matrizCoordenadas = [];
    }

    // Dibuja el tablero.
    // Inicializa el arreglo de rangos que usaremos para saber dónde se suelta cada ficha
    // Inicializa la matriz para la logica del juego
    drawTablero(){
        
        let inicioX = this.inicioTableroX;
        let xInicial = inicioX;
        for (let i = 0; i < this.columnas; i++) {
            let finX = TAMANIO_CASILLERO + xInicial;
            if(!inicializado){ // Para inicializar el arreglo una sola vez
                let rango = [xInicial, finX];
                this.zonaSueltaDeFichas[i] = rango;
            }
            let yInicial = MARGIN_TOP_TABLERO;
            let arreFilasJuego = [];
            let arreFilasCoord = [];
            for (let j = 0; j <this.filas; j++) {
                this.ctx.beginPath();
                this.ctx.drawImage(this.imgCasillero, inicioX, MARGIN_TOP_TABLERO + j * TAMANIO_CASILLERO);
                this.ctx.fill();
                this.ctx.closePath();
                if(!inicializado){ // Para inicializar el arreglo una sola vez
                    let casillero = new Casillero(xInicial, yInicial);
                    arreFilasJuego.push(0);
                    arreFilasCoord.push(casillero);
                }
                yInicial = yInicial + TAMANIO_CASILLERO;
            }
            if(!inicializado){
                this.matrizJuego.push(arreFilasJuego);
                this.matrizCoordenadas.push(arreFilasCoord);
            }
            inicioX = finX;
            xInicial = inicioX;
        }
        inicializado = true; // Ya se inicalizaron los arreglos de tablero
        console.log(this.matrizJuego);
        console.log(this.matrizCoordenadas);
        console.log(this.zonaSueltaDeFichas);
    }

    //Devuelve la columna en la cual tiene que ir la ficha soltada. Si es un lugar inválido retorna -1
    getColunmaEnJuego(ficha){
        let x = ficha.getPosicionX();
        let y = ficha.getPosicionY();

        if(y > 0 && y < MARGIN_TOP_TABLERO) {
            for(let i=0; i<this.columnas; i++){
                if(x >= this.zonaSueltaDeFichas[i][0] && x <= this.zonaSueltaDeFichas[i][1])
                    return i;
            }
        } else {
            return -1;
        }
        return -1;
    }

    

    casilleroVacio(columna, ficha){
        for(let i = filas -1; i >= 0; i--){
            if(this.matrizJuego[columna][i] == 0){
                this.matrizJuego[columna][i] = ficha.getNumeroJugador();
                console.log(this.matrizJuego);
                return this.matrizCoordenadas[columna][i];
            }
        }
        swal("YA ESTA COMPLETA", "Prueba en otra columna" );
        obtenerFichaClekeada.setPosicion(posOriginalX, posOriginalY);
        drawFichas();
        return null;
    }
}