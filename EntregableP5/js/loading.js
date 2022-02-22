"use strict";

function mostrarRegistrar(){
    setTimeout(registrarCuenta,4000);
}

function registrarCuenta(){
    window.location.href = "registro.html";
}

mostrarRegistrar();