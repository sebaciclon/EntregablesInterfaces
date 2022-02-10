"use strict";

/*********************REGISTRARSE******************************************/

document.getElementById("botonCancelar").addEventListener("click", () => {
    document.location.href ="index.html";
});

document.getElementById("botonRegistrarse").addEventListener("click", () => {
    
    let nombre = document.getElementById("inputNombre");
    let apellido = document.getElementById("inputApellido");
    let correo = document.getElementById("inputCorreo");
    let contraseña = document.getElementById("inputContraseña");
    let repetirContraseña = document.getElementById("inputRepetiContraseña");

    let errorNombre = document.getElementById("errorNombre");
    let errorApellido = document.getElementById("errorApellido");
    let errorCorreo = document.getElementById("errorCorreo");
    let errorContraseña = document.getElementById("errorContraseña");
    let errorRepetirContraseña = document.getElementById("errorRepetirContraseña");

    if(nombre.value.length == 0) {
        nombre.classList.add("error");  // para el borde del input
        errorNombre.classList.remove("mensajeOculto");  
        errorNombre.classList.add("mensajeInputNombre");  // para la letra del mensaje oculto
        errorNombre.innerHTML = "¿Cómo te llamas?";
    }

    if(apellido.value.length == 0) {
        apellido.classList.add("error");  // para el borde del input
        errorApellido.classList.remove("mensajeOculto");  
        errorApellido.classList.add("mensajeInputApellido");  // para la letra del mensaje oculto
        errorApellido.innerHTML = "¿Cuál es tu apellido?";
    }

    if(correo.value.length == 0) {
        correo.classList.add("error");  // para el borde del input
        errorCorreo.classList.remove("mensajeOculto");  
        errorCorreo.classList.add("mensajeInputCorreo");  // para la letra del mensaje oculto
        errorCorreo.innerHTML = "¿Cuál es tu correo electrónico?";
    }

    if(contraseña.value.length == 0) {
        contraseña.classList.add("error");  // para el borde del input
        errorContraseña.classList.remove("mensajeOculto");  
        errorContraseña.classList.add("mensajeInputContraseña");  // para la letra del mensaje oculto
        errorContraseña.innerHTML = "Ingresa una contraseña";
    }

    if(repetirContraseña.value.length == 0) {
        repetirContraseña.classList.add("error");  // para el borde del input
        errorRepetirContraseña.classList.remove("mensajeOculto");  
        errorRepetirContraseña.classList.add("mensajeInputRepetirContraseña");  // para la letra del mensaje oculto
        errorRepetirContraseña.innerHTML = "Repite la contraseña";
    }

    if(contraseña.value != repetirContraseña.value) {
        repetirContraseña.classList.add("error");  // para el borde del input
        errorRepetirContraseña.classList.remove("mensajeOculto");  
        errorRepetirContraseña.classList.add("mensajeInputContraseñasDistintas");  // para la letra del mensaje oculto
        errorRepetirContraseña.innerHTML = "Las contraseñas son distintas, intenta nuevamente";
    }
    
    if(nombre.value.length > 0 && apellido.value.length > 0 && correo.value.length > 0 && 
        contraseña.value.length > 0 && repetirContraseña.value.length > 0 && contraseña.value == repetirContraseña.value) {
        document.location.href ="muroInicio.html";
    }
});
