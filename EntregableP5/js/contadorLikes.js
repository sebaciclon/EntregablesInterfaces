"use strict";



let cant1 = 161;
let cant2 = 68;
let cant3 = 139;

let meGusta1 = document.getElementById("meGusta1");
let noMeGusta1 = document.getElementById("noMeGusta1");
let cantidad1 = document.getElementById("cantidad1");

let meGusta2 = document.getElementById("meGusta2");
let noMeGusta2 = document.getElementById("noMeGusta2");
let cantidad2 = document.getElementById("cantidad2");

let meGusta3 = document.getElementById("meGusta3");
let noMeGusta3 = document.getElementById("noMeGusta3");
let cantidad3 = document.getElementById("cantidad3");

meGusta1.addEventListener("click", sumar1);
noMeGusta1.addEventListener("click", restar1);

meGusta2.addEventListener("click", sumar2);
noMeGusta2.addEventListener("click", restar2);

meGusta3.addEventListener("click", sumar3);
noMeGusta3.addEventListener("click", restar3);

function sumar1(){
    cant1++;
    cantidad1.textContent = cant1;
}

function restar1(){
    cant1--;
    cantidad1.textContent = cant1;
}

function sumar2(){
    cant2++;
    cantidad2.textContent = cant2;
}

function restar2(){
    cant2--;
    cantidad2.textContent = cant2;
}

function sumar3(){
    cant3++;
    cantidad3.textContent = cant3;
}

function restar3(){
    cant3--;
    cantidad3.textContent = cant3;
}





document.getElementById("silenciarTexto").addEventListener("click", () => {
    document.location.href ="muroPersonal.html";
});

document.getElementById("verTexto").addEventListener("click", () => {
    document.location.href ="perfil.html";
});

document.getElementById("eliminarTexto").addEventListener("click", () => {
    document.location.href ="index.html";
});

/****************CLICK USUARIO****************************** */

let menuDesplegable = document.getElementById("menuChat");
let desplegado = true;

let usuario = document.getElementById("usuario");
    usuario.addEventListener("click",mostrarDesplegable);

let nombreUsuario = document.getElementById("leoEsains");
    nombreUsuario.addEventListener("click",mostrarDesplegable);

function mostrarDesplegable() {
    if(desplegado){
        menuDesplegable.classList.remove("oculto");
        menuDesplegable.classList.add("noOculto");
        desplegado=false;
    }
    else{
        menuDesplegable.classList.add("oculto");
        menuDesplegable.classList.remove("noOculto");
        desplegado=true;
    }
}

/****************CLICK 3 PUNTITOS PUBLICACION USUARIO****************************** */

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

/****************CLICK CREA TU PUBLICACION MURO INICIO****************************** */

let menuDesplegable2 = document.getElementById("publicacion1");
let desplegado2 = true;

let usuario2 = document.getElementById("botonCrearPublicacion");
    usuario2.addEventListener("click",mostrarDesplegable2);

function mostrarDesplegable2() {
    if(desplegado2){
        menuDesplegable2.classList.remove("oculto");
        menuDesplegable2.classList.add("noOculto");
        desplegado2=false;
    }
    else{
        menuDesplegable2.classList.add("oculto");
        menuDesplegable2.classList.remove("noOculto");
        desplegado2=true;
    }
}





