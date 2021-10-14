"use strict";

/**@type {HTMLCanvasElement} */

class Tablero{

    //CONSTRUCTOR DE LA CLASE
    constructor(ctx, width, height, filas, columnas,img, inicioTableroX){
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        this.filas = filas;
        this.columnas = columnas;       
        this.imgCasillero = img;       
        this.zonaSueltaDeFichas = []; // Se usa para obtener la columna en la cual se quiere jugar una ficha
        this.inicioTableroX = inicioTableroX;
       // Matriz para la lógica del juego. Se inicializa en 0 y se va poniendo 
        this.matrizJuego = []; // 1 si la ficha es del jugador1 o un 2 si la ficha es del jugador2
        // Matriz con las coordenas de inicio de cada casillero. Se usa para dibujar la ficha jugada 
        this.matrizCoordenadas = []; 
    }

    //DIBUJA EL TABLERO
    //INICIALIZA EL ARREGLO DE RANGOS QUE USAREMOS PARA SABER DONDE SE SUELTA CADA FICHA
    //INICIALIZA LA MATRIS PARA LA LOGICA DEL JUEGO
    //INICIALIZA LA MATRIZ CON LAS COORDENADAS DE CADA CASILLERO QUE SE USA PARA DIBUJAR LA FICHA JUGADA
    drawTablero(){
        
        let inicioX = this.inicioTableroX;
        let xInicial = inicioX;
        let yInicial = MARGIN_TOP_TABLERO - TAMANIO_CASILLERO;
        // Dibuja la zona de lanzamiento
        for (let i = 0; i < this.columnas; i++) {
            this.ctx.beginPath();
            this.ctx.drawImage(zonaLanzamiento, inicioX + TAMANIO_CASILLERO * i, yInicial);
            this.ctx.fill();
            this.ctx.closePath();
        }
        // Dibuja el tablero
        for (let i = 0; i < this.columnas; i++) {
            let finX = TAMANIO_CASILLERO + xInicial;
            if(!inicializado){ // Para inicializar el arreglo una sola vez
                let rango = [xInicial, finX];
                this.zonaSueltaDeFichas[i] = rango;
            }
            yInicial = MARGIN_TOP_TABLERO;
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
        // Dejamos comentados los console.log por si les interesa ver los arreglos.
        //console.log(this.matrizJuego);
        //console.log(this.matrizCoordenadas);
        //console.log(this.zonaSueltaDeFichas);
    }

    // DEVUELVE LA COLUMNA EN LA QUE DEBE IR LA FICHA JUGADA. 
    // SI SE SOLTÓ EN UN LUGAR INVÁLIDO, DEVUELVE -1
    getColunmaEnJuego(ficha){
        let x = ficha.getPosicionX();
        let y = ficha.getPosicionY();

        if(y > 0 && y < MARGIN_TOP_TABLERO) {
            for(let i=0; i<this.columnas; i++){
                if(x >= this.zonaSueltaDeFichas[i][0] + 15 && x <= this.zonaSueltaDeFichas[i][1] - 15)
                    return i;
            }
        } else {
            return -1;
        }
        return -1;
    }

    // DEVUELVE LAS COORDENADAS EN LAS QUE HAY QUE DIBUJAR LA FICHA JUGADA
    casilleroVacio(columna, ficha){
        for(let i = filas -1; i >= 0; i--){
            if(this.matrizJuego[columna][i] == 0){
                this.matrizJuego[columna][i] = ficha.getNumeroJugador();
                console.log(this.matrizJuego);
                return this.matrizCoordenadas[columna][i];
            }
        }
        // Si la columna esta completa, lo informa dibuja la ficha jugada en la posición original.
        swal("YA ESTA COMPLETA", "Prueba en otra columna" );
        obtenerFichaClekeada.setPosicion(posOriginalX, posOriginalY);
        drawFichas();
        return null;
    }

    //BUSCA LAS FICHAS IGUALES VERTICALMENTE 
    //DADA UNA COLUMNA Y UNA FICHA, RECORRE DICHA COLUMNA VERTICALMENTE
    //BUSCANDO SI HAY UN GANADOR.
    //RETORNA LA CANTIDAD DE FICHAS IGUALES QUE ENCONTRO JUNTAS
    buscarFichasIgualesVertical(columna, ficha){
        let contJug = 0;
        
        for(let i = filas -1; i >= 0; i--){
            if(this.matrizJuego[columna][i] != 0){
                if(this.matrizJuego[columna][i] == ficha.getNumeroJugador()) {
                    contJug ++;
                } else {
                    contJug = 0;
                }
            }
        }
        return contJug;
    }

    //BUSCA LAS FICHAS IGUALES HORIZONTALMENTE EN TODA LA MATRIZ
    //DADA UNA FICHA, RECORRE TODA LA MATRIZ BUSCANDO FICHAS IGUALES
    //A LA FICHA PASADA POR PARAMETRO BUSCANDO SI HAY UN GANADOR.
    //RETORNA LA CANTIDAD DE FICHAS IGUALES QUE ENCONTRO JUNTAS
    buscarFichasIgualesHorizontal(ficha) {
        let contJug = 0;

        for(let i = 0; i < this.filas; i ++) {
            for(let j = 0; j < this.columnas; j ++) {
                //if(this.matrizJuego[j][i] != 0) {
                    if(this.matrizJuego[j][i] == ficha.getNumeroJugador()) {
                        contJug ++;
                        if(contJug >= cantFichasABuscar) {
                            return contJug;
                        }
                    } else {
                        if(contJug >= cantFichasABuscar) {
                            return contJug;
                        }
                        contJug = 0;
                    }
                //}
                //contJug = 0;
            }
            contJug = 0;
        }
        return contJug;
    }

    //BUSCA LAS FICHAS IGUALES EN DIAGONAL DERECHA ABAJO
    //DADA UNA FICHA, RECORRE TODA LA MATRIZ BUSCANDO FICHAS IGUALES
    //A LA FICHA PASADA POR PARAMETRO BUSCANDO SI HAY UN GANADOR.
    //RETORNA LA CANTIDAD DE FICHAS IGUALES QUE ENCONTRO JUNTAS
    buscarFichasIgualesDiagDer(ficha) {
        let contJug = 0;
        let auxi = 0;
        let auxj;
        let i = 0;
        let j = 0;

        while(i < this.filas) {
            while(j < this.columnas) {
                auxi = i;
                auxj = j;
                while(auxi < this.filas && auxj < this.columnas) {
                    //if(this.matrizJuego[auxj][auxi] != 0) {
                        if(this.matrizJuego[auxj][auxi] == ficha.getNumeroJugador()) {
                            contJug ++;
                            if(contJug >= cantFichasABuscar) {
                                return contJug;
                            }
                        } else {
                            contJug = 0;
                        }
                    //}
                    //contJug = 0;
                    auxj ++;
                    auxi ++;
                }
                j ++;
                contJug = 0;
            }
            if(contJug >= cantFichasABuscar) {
                return contJug;
            }
            contJug = 0;
            i++;
            j = 0;
        }
        return contJug;    
    }

    //BUSCA LAS FICHAS IGUALES EN DIAGONAL IZQUIERDA ABAJO
    //DADA UNA FICHA, RECORRE TODA LA MATRIZ BUSCANDO FICHAS IGUALES
    //A LA FICHA PASADA POR PARAMETRO BUSCANDO SI HAY UN GANADOR.
    //RETORNA LA CANTIDAD DE FICHAS IGUALES QUE ENCONTRO JUNTAS
    buscarFichasIgualesDiagIzq(ficha) {
        let contJug = 0;
        let auxi;
        let auxj;
        let i = 0;
        let j = this.columnas - 1;

        while(i < this.filas) {
            while(j >= 0) {
                auxi = i;
                auxj = j;
                while(auxi < this.filas && auxj >= 0) {
                    //if(this.matrizJuego[auxj][auxi] != 0) {
                        if(this.matrizJuego[auxj][auxi] == ficha.getNumeroJugador()) {
                            contJug ++;
                            if(contJug >= cantFichasABuscar) {
                                return contJug;
                            }
                        } else {
                            contJug = 0;
                        }
                    //}
                    //contJug = 0;
                    auxj --;
                    auxi ++;
                }
                j --;
                contJug = 0;
            }
            if(contJug >= cantFichasABuscar) {
                return contJug;
            }
            contJug = 0;
            i ++;
            j = this.columnas - 1;;
        }
        return contJug;    
    }

}