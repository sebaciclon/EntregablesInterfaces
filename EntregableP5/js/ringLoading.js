"use strict";

/*********************REGISTRARSE******************************************/

let loading = document.getElementById("loading"); 
let procesando = document.getElementById("procesando");
let registrar = document.getElementById("registrar");

registrar.addEventListener("click",mostrarPaginaLoading);

function mostrarPaginaLoading(){
    window.location.href = "loading.html";
}

/*--------------------------INICIAR SESION----------------------------*/

document.getElementById("botonIniciarSesionGoogle").addEventListener("click", () => {
    document.location.href ="muroInicio.html";
});
 
document.getElementById("botonIniciarSesion").addEventListener("click", () => {
    
    let correoValido = false;
    let contraseñaValida = false;
    let correo = document.getElementById("inputCorreo");
    let contraseña = document.getElementById("inputContraseña");
    let errorCorreo = document.getElementById("errorCorreo");
    let errorContraseña = document.getElementById("errorContraseña");
    
    if(correo.value == "seba" || correo.value == "leo"){
        correoValido = true;
    } else {
        if(correo.value.length == 0) {
            correo.classList.add("error");  // para el borde del input
            errorCorreo.classList.remove("mensajeOculto");  
            errorCorreo.classList.add("mensajeInputCorreo");  // para la letra del mensaje oculto
            errorCorreo.innerHTML = "Debe ingresar su correo electrónico";
        } else {
            correo.classList.add("error");
            errorCorreo.classList.remove("mensajeOculto");
            errorCorreo.classList.add("mensajeInputCorreo");
            errorCorreo.innerHTML = "Correo electrónico invalido. Por favor ingrese otro";
        }
    }
        
    if(contraseña.value == "san" || contraseña.value == "lorenzo"){
        contraseñaValida = true;
    } else {
        if(contraseña.value.length == 0) {
            contraseña.classList.add("error");
            errorContraseña.classList.remove("mensajeOculto");
            errorContraseña.classList.add("mensajeInputContraseña");
            errorContraseña.innerHTML = "Debe ingresar su contraseña";
        } else {
            contraseña.classList.add("error");
            errorContraseña.classList.remove("mensajeOculto");
            errorContraseña.classList.add("mensajeInputContraseña");
            errorContraseña.innerHTML = "Contraseña invalida. Por favor ingrese otra";
        }
    }
        
    if(correoValido && contraseñaValida) {
        document.location.href ="muroInicio.html";
    }
});
