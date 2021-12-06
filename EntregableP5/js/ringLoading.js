"use strict";

let loading = document.getElementById("loading"); 
let procesando = document.getElementById("procesando");
let registrar = document.getElementById("registrar");

registrar.addEventListener("click",realizarLoading);

function realizarLoading(){
    loading.classList.remove("esconder");
    loading.classList.add("loading");
    procesando.classList.remove("esconder")
    setTimeout(registrarCuenta,4800);
}  

function registrarCuenta(){
    window.location.href = "registro.html";
}