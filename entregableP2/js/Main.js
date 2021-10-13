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

//VARIABLE PARA CONTROLAR EL TIEMPO DE JUEGO
let tiempoDeJuego = 0;

//VARIABLES PARA USAR CON EL MOUSE
let obtenerFichaClekeada = null;
let mouse = false;

//VARIABLES PARA EL TAMAÑO DEL TABLERO Y CANTIDAD DE FICHAS PARA EL JUEGO
let filas = 6;
let columnas = 7;
let cantFichas = filas * columnas;
let cantFichasPorJugador = cantFichas / 2;
let cantFichasABuscar = 4;

//IMAGEN QUE VA A LLEVAR EL TABLERO
let casillero = document.getElementById("casillero");

//IMAGEN PARA LA ZONA DE LANZAMIENTO
let zonaLanzamiento = document.getElementById("zonaLanzamiento");

//SE PINTA EL JUGADOR 1 AZUL PARA INDICAR QUE ES SU TURNO DE JUEGO
document.getElementById('jugador1').style.color = "blue";

//VARIABLES PARA GUARDAR LA POSICION ORIGINAL DE LA FICHA
let posOriginalX;
let posOriginalY;

//NOMBRE DE LOS JUGADORES
let jugador1 = "Jugador1";
let jugador2 = "Jugador2";

//HABILITA EL JUEGO
let juegoHabilitado = false;

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

//BOTON PARA INCIAR EL JUEGO
let btn7 = document.getElementById("iniciar");
btn7.addEventListener('click', iniciarJuego);

//BOTON PARA INTERRUMPIR EL JUEGO
let btn8 = document.getElementById("interrumpir");
btn8.addEventListener('click', interrumpirJuego);

//PARA PODER OCULTARLOS HASTA INICIAR LA PARTIDA
let tiempoRestante = document.getElementById("tiempoRestante");
let clock = document.getElementById("clock");

//PARA PODER OCULTARLOS UNA VEZ QUE INICIA LA PARTIDA
let tituloTiempo = document.getElementById("tituloTiempo");
let rango = document.getElementById("tiempoDeJuego");

//FUNCIONES DEL MOUSE
canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mousemove', onMouseMove, false);

//SE UTILIZA PARA INICIALIZAR EL ARREGLO DE ZONA DE JUEGO Y LA MATRIZ DE TABLERO UNA SOLA VEZ
let inicializado = false;

//EMPEZAMOS EL JUEGO CON EL TABLERO 4 EN LINEA
const TAMANIO_CASILLERO = 90;
const MARGIN_TOP_TABLERO = 90;
let inicioTabX = (width - TAMANIO_CASILLERO * columnas) / 2;
let tablero = new Tablero(ctx, width, height, filas, columnas, casillero, inicioTabX);
tablero.drawTablero();

//************************************************************************************************** */

//FICHAS

//METODO PARA AGREGAR UNA FICHA AL ARREGLO DE FICHAS
function agregarFicha(posX, posY, imgFicha, jugador, num) {
    let ficha = new FichaRedonda(posX, posY, 33, imgFicha, ctx, jugador, num);
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
    inicializado = false;
    filas ++;
    columnas ++;
    inicioTabX = (width - TAMANIO_CASILLERO * columnas) / 2;
    tablero = new Tablero(ctx, width, height, filas, columnas, casillero, inicioTabX);
    tablero.drawTablero();
    //btn4.style.display = 'none';
    //btn5.style.display = 'none';
    //btn6.style.display = 'none';
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    cantFichas = filas * columnas;
    cantFichasPorJugador = cantFichas / 2;
    cantFichasABuscar = 5;
}

//METODO DEL BOTON PARA JUGAR 6 EN LINEA
function seisEnLinea() {
    inicializado = false;
    filas = filas + 2;
    columnas = columnas + 2;
    inicioTabX = (width - TAMANIO_CASILLERO * columnas) / 2;
    tablero = new Tablero(ctx, width, height, filas, columnas, casillero, inicioTabX);
    tablero.drawTablero();
    //btn4.style.display = 'none';
    //btn5.style.display = 'none';
    //btn6.style.display = 'none';
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    cantFichas = filas * columnas;
    cantFichasPorJugador = cantFichas / 2;
    cantFichasABuscar = 6;
}

//METODO DEL BOTON PARA JUGAR 7 EN LINEA
function sieteEnLinea() {
    inicializado = false;
    filas = filas + 3;
    columnas = columnas + 3;
    inicioTabX = (width - TAMANIO_CASILLERO * columnas) / 2;
    tablero = new Tablero(ctx, width, height, filas, columnas, casillero, inicioTabX);
    tablero.drawTablero();
    //btn4.style.display = 'none';
    //btn5.style.display = 'none';
    //btn6.style.display = 'none';
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    cantFichas = filas * columnas;
    cantFichasPorJugador = cantFichas / 2;
    cantFichasABuscar = 7;
}


//************************************************************************************************** */

//METODO DEL BOTON DE ELECCION DE LAS FICHAS NEGRAS
function fichaNegra() {
    if(cont == 2) {
        swal('Ya eligieron fichas', 'Los dos jugadores', 'error');
    }
    else {
        //btn.style.display = 'none';
        btn.disabled = true;
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

//METODO DEL BOTON DE ELECCION DE LAS FICHAS NARANJAS
function fichaNaranja() {
    if(cont == 2) {
        swal('Ya eligieron fichas', 'Los dos jugadores', 'error');
    }
    else {
        //btn1.style.display = 'none';
        btn1.disabled = true;
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
        swal('Ya eligieron fichas', 'Los dos jugadores', 'error');
    }
    else {
        //btn2.style.display = 'none';
        btn2.disabled = true;
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

//METODO DEL BOTON DE ELECCION DE LAS FICHAS ROJAS
function fichaRoja() {
    if(cont == 2) {
        swal('Ya eligieron fichas', 'Los dos jugadores', 'error');
    }
    else {
        //btn3.style.display = 'none';
        btn3.disabled = true;
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
        if(fichas[i].getNombreJugador() == jugador && fichas[i].getFichaJugada() === false) {
            fichas[i].setDisponible(true);
        } else {
            fichas[i].setDisponible(false);
        } 
    }
}

//METODO PARA SELECCIONAR UNA FICHA
function onMouseDown(e) {
    if(juegoHabilitado){
        if(cont == 2) {
            mouse = true;
            
            if(juega){
                hacerDisponible(jugador1);
            } else {
                hacerDisponible(jugador2);
            }
            if(obtenerFichaClekeada != null) {
                obtenerFichaClekeada = null;
            }
            let fichaClikeada = findClickedFigura(e.layerX, e.layerY);
            if (fichaClikeada != null && fichaClikeada.getDisponible()) { 
                posOriginalX = fichaClikeada.getPosicionX();  
                posOriginalY = fichaClikeada.getPosicionY();
                obtenerFichaClekeada = fichaClikeada;
            }
            drawFichas();
        }
    }
}

function onMouseMove(e) {
    if(mouse && obtenerFichaClekeada != null) {
        obtenerFichaClekeada.setPosicion(e.layerX, e.layerY);
        drawFichas();
    }
}

function onMouseUp(e) {
    if(obtenerFichaClekeada != null) {
        if(juega) {
            mouse = false;
            let c = tablero.getColunmaEnJuego(obtenerFichaClekeada);
            if(c == -1) {
                obtenerFichaClekeada.setPosicion(posOriginalX, posOriginalY);
                drawFichas();
            } else {
                let casillero = tablero.casilleroVacio(c, obtenerFichaClekeada);
                let x = casillero.getXInicial() + TAMANIO_CASILLERO / 2;
                let y = casillero.getYInicial() + TAMANIO_CASILLERO / 2;
                obtenerFichaClekeada.setPosicion(x, y);
                obtenerFichaClekeada.setFichaJugada(true);
                juega = false;
                drawFichas();
                if(tablero.buscarFichasIgualesHorizontal(obtenerFichaClekeada) >= cantFichasABuscar || 
                    tablero.buscarFichasIgualesVertical(c, obtenerFichaClekeada) >= cantFichasABuscar ||
                    tablero.buscarFichasIgualesDiagDer(obtenerFichaClekeada) >= cantFichasABuscar ||
                    tablero.buscarFichasIgualesDiagIzq(obtenerFichaClekeada) >= cantFichasABuscar ) {
                    swal('Termino el juego, gano el jugador ', 'Jugador 1!!!', 'success');
                    juegoHabilitado = false;
                }
                if(!juegoHabilitado){
                    setTimeout(refrescar, 5000);
                }
                document.getElementById('jugador2').style.color = "blue";
                document.getElementById('jugador1').style.color = "black";
            }
        }
        else {
            mouse = false;
            let c = tablero.getColunmaEnJuego(obtenerFichaClekeada);
            if(c == -1) {
                obtenerFichaClekeada.setPosicion(posOriginalX, posOriginalY);
                drawFichas();
            } else {
                let casillero = tablero.casilleroVacio(c, obtenerFichaClekeada);
                let x = casillero.getXInicial() + TAMANIO_CASILLERO / 2;
                let y = casillero.getYInicial() + TAMANIO_CASILLERO / 2;
                obtenerFichaClekeada.setPosicion(x, y);
                obtenerFichaClekeada.setFichaJugada(true);
                juega = true;
                drawFichas();
                cantFichasPorJugador --;
                if(cantFichasPorJugador == 0) {
                    swal('Termino el juego, empataron!!', ' ', 'success');
                    juegoHabilitado = false;
                    if(!juegoHabilitado){
                        setTimeout(refrescar, 5000);
                    }
                    }
                if(tablero.buscarFichasIgualesHorizontal(obtenerFichaClekeada) >= cantFichasABuscar || 
                    tablero.buscarFichasIgualesVertical(c, obtenerFichaClekeada) >= cantFichasABuscar ||
                    tablero.buscarFichasIgualesDiagDer(obtenerFichaClekeada) >= cantFichasABuscar ||
                    tablero.buscarFichasIgualesDiagIzq(obtenerFichaClekeada) >= cantFichasABuscar ) {
                    swal('Termino el juego, gano el jugador ', 'Jugador 2!!!', 'success');
                    juegoHabilitado = false;
                }
                if(!juegoHabilitado){
                    setTimeout(refrescar, 5000);
                }
                document.getElementById('jugador1').style.color = "blue";
                document.getElementById('jugador2').style.color = "black";
            }
        }
    }  
}

function inicializarTiempoDeJuego(tiempo){
    tiempoDeJuego = tiempo;
}

function refrescar(){
    location.reload();
}

function interrumpirJuego(){
    swal("JUEGO INTERRUMPIDO", "Inténtalo nuevamente!!");
    juegoHabilitado = false;
    setTimeout(refrescar, 5000);
}


function terminarJuego(){
    juegoHabilitado = false;
    swal("TIEMPO CUMPLIDO", "No hubo ganador!!");
    setTimeout(refrescar, 5000);
}

function iniciarJuego(){
    if(cont == 2){
        juegoHabilitado = true;
        let hoy = new Date();
        let minutos = tiempoDeJuego * 60000;
        let suma = hoy.getTime() + minutos;
        let fechaLimite = new Date(suma);
        setTimeout(terminarJuego, minutos);
        countdown(fechaLimite, 'clock', '¡Terminó la partida!');
        /*btn.style.display = 'none';
        btn1.style.display = 'none';
        btn2.style.display = 'none';
        btn3.style.display = 'none';
        btn4.style.display = 'none';
        btn5.style.display = 'none';
        btn6.style.display = 'none';
        btn7.style.display = 'none';*/
        btn.disabled = true;
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.style.display = 'inline'; 
        //tiempoRestante.style.display = 'flex';
        clock.style.display = 'inline';
        tituloTiempo.style.display = 'none';
        rango.style.display = 'none';
    }
    else
        if(cont == 0)
            swal("ESCOGER FICHA PARA JUGAR", "Ambos jugadores deben elegir su ficha!!");
        else
            if(cont == 1)
                swal("ESCOGER FICHA PARA JUGAR", "El jugador 2 falta elegir su ficha!!");
}

function esconderInterrumpirJuego(){
    btn8.style.display = 'none';
    clock.style.display = 'none';
}

esconderInterrumpirJuego();



        








