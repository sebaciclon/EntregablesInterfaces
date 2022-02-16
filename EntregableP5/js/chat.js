document.getElementById("carlosO").addEventListener("click", () => {
    document.location.href ="chatGrande.html";
});

let menuDesplegable4 = document.getElementById("menuChat2");
let desplegado4 = true;

let usuario4 = document.getElementById("tresPuntitosChat");
    usuario4.addEventListener("click",mostrarDesplegable4);

function mostrarDesplegable4() {
    if(desplegado4){
        menuDesplegable4.classList.remove("oculto");
        menuDesplegable4.classList.add("noOculto");
        desplegado4=false;
    }
    else{
        menuDesplegable4.classList.add("oculto");
        menuDesplegable4.classList.remove("noOculto");
        desplegado4=true;
    }
}