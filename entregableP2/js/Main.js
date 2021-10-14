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
const TAMANIO_CASILLERO = 45;
const MARGIN_TOP_TABLERO = 90;
const RADIO_FICHA = 15;
let inicioTabX = (width - TAMANIO_CASILLERO * columnas) / 2;
let tablero = new Tablero(ctx, width, height, filas, columnas, casillero, inicioTabX);
tablero.drawTablero();

//************************************************************************************************** */

//FICHAS

//METODO PARA AGREGAR UNA FICHA AL ARREGLO DE FICHAS
//PRIMERO SE CREA LA FICHA (FICHA) CON EL CONSTRUCTOR DE LA CLASE FICHAREDONDA CON SUS
//RESPECTIVOS PARAMETROS:LA COORDENADA EN X, LA COORDENADA EN Y, EL RADIO DE LA FICHA, LA IMAGEN DE LA FICHA,
//EL CONTEXTO, EL NOMBRE DEL JUGADOR Y EL NUMERO DEL MISMO
//Y LUEGO SE LA AGREGA AL ARREGLO FICHAS DONDE SE GUARDAN TODAS LAS FICHAS DEL JUEGO
function agregarFicha(posX, posY, imgFicha, jugador, num) {
    let ficha = new FichaRedonda(posX, posY, RADIO_FICHA, imgFicha, ctx, jugador, num);
    fichas.push(ficha); 
}

//METODO QUE DIBUJA LAS FICHAS EN EL CANVAS
//SE RECORRE EL ARREGLO DE FICHAS (FICHAS) Y SE LAS DIBUJA CON EL METODO DRAW EN EL CAMBAS
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
//SE INICIALIZAN TODAS LAS VARIABLES NECESARIAS PARA ESTE TAMAÑO DEL TABLERO (8 * 7) Y PARA
//LAS FICHAS NECESARIAS (56).
function cincoEnLinea() {
    if(cont == 0){
        inicializado = false;
        filas ++;
        columnas ++;
        inicioTabX = (width - TAMANIO_CASILLERO * columnas) / 2;
        tablero = new Tablero(ctx, width, height, filas, columnas, casillero, inicioTabX);
        tablero.drawTablero();
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        cantFichas = filas * columnas;
        cantFichasPorJugador = cantFichas / 2;
        cantFichasABuscar = 5;
    }
}

//METODO DEL BOTON PARA JUGAR 6 EN LINEA
//SE INICIALIZAN TODAS LAS VARIABLES NECESARIAS PARA ESTE TAMAÑO DEL TABLERO (9 * 8) Y PARA
//LAS FICHAS NECESARIAS (72).
function seisEnLinea() {
    if(cont == 0){
        inicializado = false;
        filas = filas + 2;
        columnas = columnas + 2;
        inicioTabX = (width - TAMANIO_CASILLERO * columnas) / 2;
        tablero = new Tablero(ctx, width, height, filas, columnas, casillero, inicioTabX);
        tablero.drawTablero();
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        cantFichas = filas * columnas;
        cantFichasPorJugador = cantFichas / 2;
        cantFichasABuscar = 6;
    }
}

//METODO DEL BOTON PARA JUGAR 7 EN LINEA
//SE INICIALIZAN TODAS LAS VARIABLES NECESARIAS PARA ESTE TAMAÑO DEL TABLERO (10 * 9) Y PARA
//LAS FICHAS NECESARIAS (90).
function sieteEnLinea() {
    if(cont == 0){
        inicializado = false;
        filas = filas + 3;
        columnas = columnas + 3;
        inicioTabX = (width - TAMANIO_CASILLERO * columnas) / 2;
        tablero = new Tablero(ctx, width, height, filas, columnas, casillero, inicioTabX);
        tablero.drawTablero();
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        cantFichas = filas * columnas;
        cantFichasPorJugador = cantFichas / 2;
        cantFichasABuscar = 7;
    }
}


//************************************************************************************************** */

//METODO QUE UBICA LAS FICHAS A LOS DOS COSTADOS DEL TABLERO
//RECIBE POR PARAMETRO LA IMAGEN DE LA FICHA. SI EL JUEGO ES 4 EN LINEA O 5 EN LINEA
//DIBUJA DOS FILAS CON LA CANTIDAD DE FICHAS NECESARIAS. SI EL JUEGO ES 6 EN LINEA
//O 7 EN LINEA DIBUJA 3 FILAS CON LA CANTIDAD DE FICHAS NECESARIOS PARA EL JUEGO.
function ubicarFichas(ficha) {
    if(cont == 0) {
        cont ++;
        if(cantFichasABuscar == 4) {
            //let posX = inicioTabX / 2;
            let posX = inicioTabX / 4;
            let posY = MARGIN_TOP_TABLERO + RADIO_FICHA;
            let distancia = 0;
            for(let i = 0; i < cantFichasPorJugador / 2; i++) {
                agregarFicha(posX, posY + i + distancia, ficha, jugador1, 1);
                distancia += RADIO_FICHA * 2;
            }
            distancia = 0;
            posX = inicioTabX - inicioTabX / 4;
            for(let i = 0; i < cantFichasPorJugador / 2 - 1; i++) {
                agregarFicha(posX, posY + i + distancia, ficha, jugador1, 1);
                distancia += RADIO_FICHA * 2;
            }

        } else {
            if(cantFichasABuscar == 5) {
                let posX = inicioTabX / 4;
                let posY = MARGIN_TOP_TABLERO + RADIO_FICHA;
                let distancia = 0;
                for(let i = 0; i < cantFichasPorJugador / 2; i++) {
                    agregarFicha(posX, posY + i + distancia, ficha, jugador1, 1);
                    distancia += RADIO_FICHA * 2;
                }
                distancia = 0;
                posX = inicioTabX - inicioTabX / 4;
                for(let i = 0; i < cantFichasPorJugador / 2; i++) {
                    agregarFicha(posX, posY + i + distancia, ficha, jugador1, 1);
                    distancia += RADIO_FICHA * 2;
                }
            } else {
                if(cantFichasABuscar == 6 || cantFichasABuscar == 7) {
                    let posX = inicioTabX / 4;
                    let posY = MARGIN_TOP_TABLERO + RADIO_FICHA;
                    let distancia = 0;
                    for(let i = 0; i < cantFichasPorJugador / 3; i++) {
                        agregarFicha(posX, posY + i + distancia, ficha, jugador1, 1);
                        distancia += RADIO_FICHA * 2 - 1;
                    }
                    distancia = 0;
                    posX = inicioTabX - inicioTabX / 4;
                    for(let i = 0; i < cantFichasPorJugador / 3; i++) {
                        agregarFicha(posX, posY + i + distancia, ficha, jugador1, 1);
                        distancia += RADIO_FICHA * 2 - 1;
                    }
                    distancia = 0;
                    posX = inicioTabX / 2;
                    for(let i = 0; i < cantFichasPorJugador / 3; i++) {
                        agregarFicha(posX, posY + i + distancia, ficha, jugador1, 1);
                        distancia += RADIO_FICHA * 2 - 1;
                    }
                }
            } 
        }
    }
    else {
        cont ++;
        if(cantFichasABuscar == 4) {
            let posX = (width - inicioTabX) + inicioTabX / 4 + inicioTabX / 2;
            let posY = MARGIN_TOP_TABLERO + RADIO_FICHA;
            let distancia = 0;
            for(let i = 0; i < cantFichasPorJugador / 2; i++) {
                agregarFicha(posX, posY + i + distancia, ficha, jugador2, 2);
                distancia += RADIO_FICHA * 2;
            }
            distancia = 0;
            posX = (width - inicioTabX) + inicioTabX / 4;
            
            for(let i = 0; i < cantFichasPorJugador / 2 - 1; i++) {
                agregarFicha(posX, posY + i + distancia, ficha, jugador2, 2);
                distancia += RADIO_FICHA * 2;
            }
        } else {
            if(cantFichasABuscar == 5) {
                let posX = (width - inicioTabX) + inicioTabX / 4 + inicioTabX / 2;
                let posY = MARGIN_TOP_TABLERO + RADIO_FICHA;
                let distancia = 0;
                for(let i = 0; i < cantFichasPorJugador / 2; i++) {
                    agregarFicha(posX, posY + i + distancia, ficha, jugador2, 2);
                    distancia += RADIO_FICHA * 2;
                }
                distancia = 0;
                posX = (width - inicioTabX) + inicioTabX / 4;
                
                for(let i = 0; i < cantFichasPorJugador / 2; i++) {
                    agregarFicha(posX, posY + i + distancia, ficha, jugador2, 2);
                    distancia += RADIO_FICHA * 2;
                }
            } else {
                if(cantFichasABuscar == 6 || cantFichasABuscar == 7) {
                    let posX = (width - inicioTabX) + inicioTabX / 4 + inicioTabX / 2;
                    let posY = MARGIN_TOP_TABLERO + RADIO_FICHA;
                    let distancia = 0;
                    for(let i = 0; i < cantFichasPorJugador / 3; i++) {
                        agregarFicha(posX, posY + i + distancia, ficha, jugador2, 2);
                        distancia += RADIO_FICHA * 2 - 1;
                    }
                    distancia = 0;
                    posX = (width - inicioTabX) + inicioTabX / 4;
                    for(let i = 0; i < cantFichasPorJugador / 3; i++) {
                        agregarFicha(posX, posY + i + distancia, ficha, jugador2, 2);
                        distancia += RADIO_FICHA * 2 - 1;
                    }
                    distancia = 0;
                    posX = (width - inicioTabX) + inicioTabX / 2;
                    for(let i = 0; i < cantFichasPorJugador / 3; i++) {
                        agregarFicha(posX, posY + i + distancia, ficha, jugador2, 2);
                        distancia += RADIO_FICHA * 2 - 1;
                    }
                } 
            } 
        }
    }
}

//METODO DEL BOTON PARA SELECCIONAR LAS FICHAS NEGRAS
//EN ESTE METODO SE LLAMA AL METODO UBICAR FICHAS
//LA VARIABLE CONT SE UTILIZA PARA SABER SI AMBOS JUGADORES YA ELIGIERON SUS FICHAS
//Y QUE NO PERMITA VOLVER A ELEGIR
function fichaNegra() {
    if(cont == 2) {
        swal('Ya eligieron fichas', 'Los dos jugadores', 'error');
    }
    else {
        btn.style.display = 'none';
        let negra = document.getElementById("negra");
        ubicarFichas(negra);
    }
    drawFichas();
}

//METODO DEL BOTON PARA SELECCIONAR LAS FICHAS NARANJAS
//EN ESTE METODO SE LLAMA AL METODO UBICAR FICHAS
//LA VARIABLE CONT SE UTILIZA PARA SABER SI AMBOS JUGADORES YA ELIGIERON SUS FICHAS
//Y QUE NO PERMITA VOLVER A ELEGIR
function fichaNaranja() {
    if(cont == 2) {
        swal('Ya eligieron fichas', 'Los dos jugadores', 'error');
    }
    else {
        btn1.style.display = 'none';
        let naranja = document.getElementById("naranja");
        ubicarFichas(naranja);
    }
    drawFichas();
}

//METODO DEL BOTON PARA SELECCIONAR LAS FICHAS AZULES
//EN ESTE METODO SE LLAMA AL METODO UBICAR FICHAS
//LA VARIABLE CONT SE UTILIZA PARA SABER SI AMBOS JUGADORES YA ELIGIERON SUS FICHAS
//Y QUE NO PERMITA VOLVER A ELEGIR
function fichaAzul() {
    if(cont == 2) {
        swal('Ya eligieron fichas', 'Los dos jugadores', 'error');
    }
    else {
        btn2.style.display = 'none';
        let azul = document.getElementById("azul");
        ubicarFichas(azul);
    }
    drawFichas();
}

//METODO DEL BOTON PARA SELECCIONAR LAS FICHAS ROJAS
//EN ESTE METODO SE LLAMA AL METODO UBICAR FICHAS
//LA VARIABLE CONT SE UTILIZA PARA SABER SI AMBOS JUGADORES YA ELIGIERON SUS FICHAS
//Y QUE NO PERMITA VOLVER A ELEGIR
function fichaRoja() {
    if(cont == 2) {
        swal('Ya eligieron fichas', 'Los dos jugadores', 'error');
    }
    else {
        btn3.style.display = 'none';
        let roja = document.getElementById("roja");
        ubicarFichas(roja);
    }
    drawFichas();
}

//*************************************************************************************************/

//FUNCIONES DEL MOUSE

//METODO QUE DEVUELVE UNA FICHA SI EL MOUSE ESTA DENTRO DE LA FIGURA
//RECORRE EL ARREGLO DE FICHAS Y AGARRA UNA, CON EL METODO ISPOINTINSIDE VERIFICA
//SI EL MOUSE ESTA DENTRO DE LA FICHA Y SI ES ASI LA RETORNA
function findClickedFigura(x, y) {
    for(let i = 0; i < fichas.length; i ++) {
        const elemento = fichas[i];
        if(elemento.isPointInside(x, y)) {
            return elemento;
        }
    }
}

//METODO QUE CAMBIA LA DISPONIBILIDAD DE UNA FICHA PARA JUGARLA
//BUSCA LAS FICHAS DEL JUGADOR PASADO POR PARAMETRO, SI LA FICHA SELECCIONA ES DEL JUGADOR
//Y AUN NO FUE JUGADA CAMBIA LA DISPONIBILIDAD
//SE USA PARA QUE UN JUGADOR NO JUEGUE DOS VECES SEGUIDAS
function hacerDisponible(jugador) {
    for(let i = 0; i < fichas.length; i ++) {
        if(fichas[i].getNombreJugador() == jugador && fichas[i].getFichaJugada() === false) {
            fichas[i].setDisponible(true);
        } else {
            fichas[i].setDisponible(false);
        } 
    }
}

//METODO QUE SE DISPARA CUANDO UN JUGADOR CLICKEA SOBRE UNA FICHA
//PRIMERO VERIFICA QUE EL JUEGO ESTE HABILITADO, LUEGO SI AMBOS JUGADORES
//YA ELEGIERON FICHAS Y PARA TERMINAR QUE LA FICHA SELECCIONADA ESTE DISPONIBLE
//PARA JUGARLA
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

//METODO QUE SE DISPARA CUANDO UN JUGADOR AGARRO UNA FICHA Y LA MUEVE
//OBTIENE LAS COORDENADAS X E Y DE DONDE ESTA LA FICHA Y LA DIBUJA
function onMouseMove(e) {
    if(mouse && obtenerFichaClekeada != null) {
        obtenerFichaClekeada.setPosicion(e.layerX, e.layerY);
        drawFichas();
    }
}

//METODO QUE SE DISPARA CUANDO UN JUGADOR SUELTA LA FICHA
//PRIMERO VERIFICA QUE HAYA UNA FICHA CLICKEADA, LEUGO CON LA VARIABLE JUEGA OBTENEMOS
//SI LE CORRESPONDE JUGAR AL JUGADOR 1 O 2.
//SI LA FICHA NO ESTA EN LA "ZONA DE TIRO" VUELVE A SU POSICION ORIGINAL Y SIGUE JUGANDO EL
//MISMO JUGADOR, Y SI LA FICHA ESTA EN LA "ZONA DE TIRO" BUSCA LA POSICION CORRECTA PARA
//UBICARLA EN EL TABLERO, LA DIBUJA Y VERIFICA SI GANO EL JUEGO O NO
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

// SETEA EL TIEMPO DE JUEGO CON EL VALOR DEL RANGO SELECCIONADO POR EL USUARIO
function inicializarTiempoDeJuego(tiempo){
    tiempoDeJuego = tiempo;
}

// RECARGA LA PÁGINA
function refrescar(){
    location.reload();
}

// PARA EL JUEGO, HABILITA PARA VOLVER A EMPEZAR OTRA PARTIDA
function interrumpirJuego(){
    swal("JUEGO INTERRUMPIDO", "Inténtalo nuevamente!!");
    juegoHabilitado = false;
    setTimeout(refrescar, 5000);
}

// INHABILITA EL JUEGO, INFORMA QUE EL TIEMPO CULMINÓ. RECARGA LA PAGINA.
function terminarJuego(){
    juegoHabilitado = false;
    swal("TIEMPO CUMPLIDO", "No hubo ganador!!");
    setTimeout(refrescar, 5000);
}

// SETEA TODAS LAS VARIABLES NECESARIAS PARA INICIAR EL JUEGO
// SE ENCARGA DE BLOQUEAR O ESCONDER PARTE DE LA INTERFACE QUE NO TIENE SENTIDO MOSTRAR
// CUANDO YA SE ESTÁ DESARROLLANDO EL JUEGO.
// MUESTRA EL RELOJ CON LA CUENTA REGRESIVA
function iniciarJuego(){
    if(cont == 2){
        if(tiempoDeJuego > 0){
            juegoHabilitado = true;
            let hoy = new Date();
            let minutos = tiempoDeJuego * 60000;
            let suma = hoy.getTime() + minutos;
            let fechaLimite = new Date(suma);
            setTimeout(terminarJuego, minutos);
            countdown(fechaLimite, 'clock', '¡FIN...!');
            btn.style.display = 'none';
            btn1.style.display = 'none';
            btn2.style.display = 'none';
            btn3.style.display = 'none';
            btn4.disabled = true;
            btn5.disabled = true;
            btn6.disabled = true;
            btn7.style.display = 'none';
            btn8.style.display = 'inline'; 
            //tiempoRestante.style.display = 'flex';
            clock.style.display = 'inline';
            tituloTiempo.style.display = 'none';
            rango.style.display = 'none';
        }
        else
        swal("TIEMPO DE JUEGO", "Se debe seleccionar un tiempo de juego!!");
    }
    else
        if(cont == 0)
            swal("ESCOGER FICHA PARA JUGAR", "Ambos jugadores deben elegir su ficha!!");
        else
            if(cont == 1)
                swal("ESCOGER FICHA PARA JUGAR", "El jugador 2 falta elegir su ficha!!");
}

// ESCONDE AL CARGAR LA PAGINA EL BOTÓN DE INTERRUMPIR JUEGO
// ESCONDE TAMBIÉN EL RELOJ DE LA CUENTA REGRESIVA
// CUANDO SE INICIA EL JUEGO ESTOS DOS SE MUESTRAN.
function esconderInterrumpirJuego(){
    btn8.style.display = 'none';
    clock.style.display = 'none';
}

esconderInterrumpirJuego();



        








