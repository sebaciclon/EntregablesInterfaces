

let menuDesplegable = document.getElementById("menuChat2");
let desplegado = true;

let usuario = document.getElementById("tresPuntitosChat");
    usuario.addEventListener("click",mostrarDesplegable);

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

