"use strict";

/**@type {HTMLCanvasElement} */

//CANVAS
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;

//ARREGLO PARA GUARDAR LAS FICHAS
let fichas = [];

//VARIABLE PARA CONTROLAR EL TURNO DE CADA JUGADOR
let juega = true;

//VARIABLE PARA CONTROLAR QUE ELIJAN FICHAS LOS DOS JUGADORES SOLO UNA VEZ
let cont = 0;

//VARIABLES PARA USAR CON EL MOUSE
let clickearFicha = null;
let mouse = false;

//VARIABLES PARA EL TAMAÑO DEL TABLERO Y CANTIDAD DE FICHAS PARA EL JUEGO
let filas = 6;
let columnas = 7;
let cantFichas = filas * columnas;

//IMAGEN QUE VA A LLEVAR EL TABLERO
let casillero = document.getElementById("casillero");

//VARIABLES PARA GUARDAR LA POSICION ORIGINAL DE LA FICHA
let posOriginalX;
let posOriginalY;

//NOMBRE DE LOS JUGADORES
let jugador1 = "Jugador1";
let jugador2 = "Jugador2"

//BOTONES PARA ELEGIR LAS FICHAS
let btn = document.getElementById("fichaNegra");
btn.addEventListener('click', fichaNegra);
let btn1 = document.getElementById("fichaNaranja");
btn1.addEventListener('click', fichaNaranja);
let btn2 = document.getElementById("fichaAzul");
btn2.addEventListener('click', fichaAzul);
let btn3 = document.getElementById("fichaRoja");
btn3.addEventListener('click', fichaRoja);

//BOTONES PARA ELEGIR EL TAMAÑO DEL TABLERO
let btn4 = document.getElementById("5");
btn4.addEventListener('click', cincoEnLinea);
let btn5 = document.getElementById("6");
btn5.addEventListener('click', seisEnLinea);
let btn6 = document.getElementById("7");
btn6.addEventListener('click', sieteEnLinea);

//FUNCIONES DEL MOUSE
canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mousemove', onMouseMove, false);

//SE UTILIZA PARA INICIALIZAR EL ARREGLO DE ZONA DE JUEGO Y LA MATRIZ DE TABLERO UNA SOLA VEZ
let inicializado = false;

//EMPEZAMOS EL JUEGO CON EL TABLERO 4 EN LINEA
const TAMANIO_CASILLERO = 90;
const MARGIN_TOP_TABLERO = 100;
let inicioTabX = (width - TAMANIO_CASILLERO * columnas) / 2;
let tablero = new Tablero(ctx, width, height, filas, columnas, casillero, inicioTabX);
tablero.drawTablero();


/*let tablero = new Tablero(ctx, width, height, filas, columnas, casillero);
const TAMANIO_CASILLERO = 90;
const MARGIN_TOP_TABLERO = 150;
tablero.drawTablero();*/


//************************************************************************************************** */

//REINICIAR TABLERO --> NO FUNCIONA
/*function reiniciar() {
    //dibujarTablero();
    limpiarCanvas();
    btn.style.display = 'inline';
    btn1.style.display = 'inline';
    btn2.style.display = 'inline';
    btn3.style.display = 'inline';
    cont = 0;
    
}*/

//****************************************************************************************************** */

//FICHAS

//METODO PARA AGREGAR UNA FICHA AL ARREGLO DE FICHAS
function agregarFicha(posX, posY, imgFicha, jugador) {
    let ficha = new FichaRedonda(posX, posY, 33, imgFicha, ctx, jugador);
    fichas.push(ficha); 
}

//METODO QUE DIBUJA LAS FICHAS EN EL CANVAS
function drawFichas() {
    limpiarCanvas();
    for(let i = 0; i < fichas.length; i ++) {
        fichas[i].draw();
    }
}

//******************************************************************************************************* */

//METODO QUE LIMPIA EL CANVAS Y DIBUJA EL TABLERO
function limpiarCanvas() {
    ctx.clearRect(0, 0, width, height);
    tablero.drawTablero();
}

//******************************************************************************************************* */

//METODO DEL BOTON PARA JUGAR 5 EN LINEA
function cincoEnLinea() {
    filas ++;
    columnas ++;
    inicioTabX = (width - TAMANIO_CASILLERO * columnas) / 2;
    tablero = new Tablero(ctx, width, height, filas, columnas, casillero, inicioTabX);
    tablero.drawTablero();
    btn4.style.display = 'none';
    btn5.style.display = 'none';
    btn6.style.display = 'none';
    cantFichas = filas * columnas;
}

//METODO DEL BOTON PARA JUGAR 6 EN LINEA
function seisEnLinea() {
    filas = filas + 2;
    columnas = columnas + 2;
    inicioTabX = (width - TAMANIO_CASILLERO * columnas) / 2;
    tablero = new Tablero(ctx, width, height, filas, columnas, casillero, inicioTabX);
    tablero.drawTablero();
    btn4.style.display = 'none';
    btn5.style.display = 'none';
    btn6.style.display = 'none';
    cantFichas = filas * columnas;
}

//METODO DEL BOTON PARA JUGAR 7 EN LINEA
function sieteEnLinea() {
    filas = filas + 3;
    columnas = columnas + 3;
    inicioTabX = (width - TAMANIO_CASILLERO * columnas) / 2;
    tablero = new Tablero(ctx, width, height, filas, columnas, casillero, inicioTabX);
    tablero.drawTablero();
    btn4.style.display = 'none';
    btn5.style.display = 'none';
    btn6.style.display = 'none';
    cantFichas = filas * columnas;
}


//************************************************************************************************** */

function fichaNegra() {
    if(cont == 2) {
        alert("ya eligieron fichas los dos jugadores");
    }
    else {
        btn.style.display = 'none';
        let negra = document.getElementById("negra");
        
        if(cont == 0) {
            cont ++;
            let posX = inicioTabX / 2;
            let posY = MARGIN_TOP_TABLERO + (TAMANIO_CASILLERO * filas) / 2;
            for (let i = 0; i < cantFichas / 2; i++) {
                agregarFicha(posX, posY, negra, jugador1, 1);
            }
        }
        else {
            cont ++;
            let posX = (width - inicioTabX) + inicioTabX / 2;
            let posY = MARGIN_TOP_TABLERO + (TAMANIO_CASILLERO * filas) / 2;
            for (let i = 0; i < cantFichas / 2; i++) {
                agregarFicha(posX, posY, negra, jugador2, 2);
            }
        }
        drawFichas();
    }
}

//METODO DEL BOTON DE ELECCION DE LAS FICHAS ROJAS
function fichaNaranja() {
    if(cont == 2) {
        alert("ya eligieron fichas los dos jugadores");
    }
    else {
        btn1.style.display = 'none';
        let naranja = document.getElementById("naranja");
        
        if(cont == 0) {
            cont ++;
            let posX = inicioTabX / 2;
            let posY = MARGIN_TOP_TABLERO + (TAMANIO_CASILLERO * filas) / 2;
            for (let i = 0; i < cantFichas / 2; i++) {
                agregarFicha(posX, posY, naranja, jugador1, 1);
            }
        }
        else {
            cont ++;
            let posX = (width - inicioTabX) + inicioTabX / 2;
            let posY = MARGIN_TOP_TABLERO + (TAMANIO_CASILLERO * filas) / 2;
            for (let i = 0; i < cantFichas / 2; i++) {
                agregarFicha(posX, posY, naranja, jugador2, 2);
            }
        }
        drawFichas();
    }
}

//METODO DEL BOTON DE ELECCION DE LAS FICHAS AZULES
function fichaAzul() {
    if(cont == 2) {
        alert("ya eligieron fichas los dos jugadores");
    }
    else {
        btn2.style.display = 'none';
        let azul = document.getElementById("azul");
        
        if(cont == 0) {
            cont ++;
            let posX = inicioTabX / 2;
            let posY = MARGIN_TOP_TABLERO + (TAMANIO_CASILLERO * filas) / 2;
            for (let i = 0; i < cantFichas / 2; i++) {
                agregarFicha(posX, posY, azul, jugador1, 1);
            }
        }
        else {
            cont ++;
            let posX = (width - inicioTabX) + inicioTabX / 2;
            let posY = MARGIN_TOP_TABLERO + (TAMANIO_CASILLERO * filas) / 2;
            for (let i = 0; i < cantFichas / 2; i++) {
                agregarFicha(posX, posY, azul, jugador2, 2);
            }
        }
        drawFichas();
    }
}

//METODO DEL BOTON DE ELECCION DE LAS FICHAS ROSAS
function fichaRoja() {
    if(cont == 2) {
        alert("ya eligieron fichas los dos jugadores");
    }
    else {
        btn3.style.display = 'none';
        let roja = document.getElementById("roja");
        
        if(cont == 0) {
            cont ++;
            let posX = inicioTabX / 2;
            let posY = MARGIN_TOP_TABLERO + (TAMANIO_CASILLERO * filas) / 2;
            for (let i = 0; i < cantFichas / 2; i++) {
                agregarFicha(posX, posY, roja, jugador1, 1);
            }
        }
        else {
            cont ++;
            let posX = (width - inicioTabX) + inicioTabX / 2;
            let posY = MARGIN_TOP_TABLERO + (TAMANIO_CASILLERO * filas) / 2;
            for (let i = 0; i < cantFichas / 2; i++) {
                agregarFicha(posX, posY, roja, jugador2, 2);
            }
        }
        drawFichas();
    }
}

//*************************************************************************************************/

//FUNCIONES DEL MOUSE

//METODO QUE DEVUELVE UNA FICHA SI EL MOUSE ESTA DENTRO DE LA FIGURA
function findClickedFigura(x, y) {
    for(let i = 0; i < fichas.length; i ++) {
        const elemento = fichas[i];
        if(elemento.isPointInside(x, y)) {
            return elemento;
        }
    }
}

//METODO QUE CAMBIA LA DISPONIBILIDAD DE UNA FICHA PARA JUGARLA
function hacerDisponible(jugador) {
    for(let i = 0; i < fichas.length; i ++) {
        if(fichas[i].getNombreJugador() == jugador) {
            fichas[i].setDisponible(true);
        } else {
            fichas[i].setDisponible(false);
        } 
    }
}

//METODO PARA SELECCIONAR UNA FICHA
function onMouseDown(e) {
    if(cont == 2) {
        
        mouse = true;
        //console.log(juega);
        if(juega){
            hacerDisponible(jugador1);
        } else {
            hacerDisponible(jugador2);
        }
        if (clickearFicha != null) {// se dejó de seleccionar una ficha
            //clickearFicha.setResaltado(false);
            clickearFicha = null;
        }
        let clickFigura = findClickedFigura(e.layerX, e.layerY);
        if (clickFigura != null && clickFigura.getDisponible()) { 
            posOriginalX = clickFigura.getPosicionX();  
            posOriginalY = clickFigura.getPosicionY();
            //clickFigura.setResaltado(true);
            clickearFicha = clickFigura;
        }
        drawFichas();
        //console.log(tablero.getColunmaEnJuego(clickFigura));
        
    }
}

function onMouseMove(e) {
    if(mouse && clickearFicha != null) {
        clickearFicha.setPosicion(e.layerX, e.layerY);
        drawFichas();
    }
}

function onMouseUp(e) {
    if(clickearFicha != null) {
        if(juega) {
            mouse = false;
            
                let c = tablero.getColunmaEnJuego(clickearFicha);
                if(c == -1) {
                    clickearFicha.setPosicion(posOriginalX, posOriginalY);
                    drawFichas();
                    
                } else {
                    let coordColocarFicha = tablero.ultimoCasilleroVacio(c, clickearFicha);
                    let x = coordColocarFicha[0];
                    let y = coordColocarFicha[1];
                    clickearFicha.setPosicion(x, y);
                    juega = false;
                    //clickearFicha.setPosicion(600, height - 200);
                    //drawFichas();
                    let roja = document.getElementById("casillero_naranja");
                    this.ctx.beginPath();
                    this.ctx.drawImage(roja, x, y);
                    this.ctx.fill();
                    this.ctx.closePath();
                }
            
        }
        else {
            mouse = false;
            
            //if(clickearFicha != null) {
                let c = tablero.getColunmaEnJuego(clickearFicha);
                if(c == -1) {
                    clickearFicha.setPosicion(posOriginalX, posOriginalY);
                    drawFichas();
                    //clickearFicha.setResaltado(false);
                } else {
                    //clickearFicha.setPosicion(tablero.zonaSueltaDeFichas[c], height - 50);
                    juega = true;
                    //clickearFicha.setPosicion(600, height - 200);
                    //drawFichas();
                    let roja = document.getElementById("casillero_naranja");
                    this.ctx.beginPath();
                    this.ctx.drawImage(roja, x, y);
                    this.ctx.fill();
                    this.ctx.closePath();

                }
            //}
        }
            //console.log(tablero.getColunmaEnJuego(clickearFicha));
    }  
    
    

   

}







