/****************CLICK CREA TU PUBLICACION MURO PERSONAL****************************** */

let menuDesplegable3 = document.getElementById("publicacion");
let desplegado3 = true;

let usuario3 = document.getElementById("botonCrearPublicacion1");
    usuario3.addEventListener("click",mostrarDesplegable3);

function mostrarDesplegable3() {
    if(desplegado3){
        menuDesplegable3.classList.remove("oculto");
        menuDesplegable3.classList.add("noOculto");
        desplegado3=false;
    }
    else{
        menuDesplegable3.classList.add("oculto");
        menuDesplegable3.classList.remove("noOculto");
        desplegado3=true;
    }
}



let menuDesplegable1 = document.getElementById("menuChat1");
let desplegado1 = true;

let usuario1 = document.getElementById("tresPuntitos1");
    usuario1.addEventListener("click",mostrarDesplegable1);

function mostrarDesplegable1() {
    if(desplegado1){
        menuDesplegable1.classList.remove("oculto");
        menuDesplegable1.classList.add("noOculto");
        desplegado1=false;
    }
    else{
        menuDesplegable1.classList.add("oculto");
        menuDesplegable1.classList.remove("noOculto");
        desplegado1=true;
    }
}