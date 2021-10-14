"use strict";

// Funcion que retorna un objeto con min y seg por separado para llegar al tiempo limite (deadline) 
// Se trabaja con la fecha completa pero utilizamos solo los min y seg
const getRemainingTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000, // tiempo limite - tiempo acutual
        // Se concatena un cero y muestra los dos últimos digitos
        // Esto es para que siempre muestre el tiempo (min y seg) con 2 digitos cada uno
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2), 
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));
  
    return {
      remainSeconds,
      remainMinutes,
      remainHours,
      remainDays,
      remainTime
    }
  };
  
  // Funcion que simula el conteo del reloj y lo imprime en el elemento (elem) del DOM
  // También da un mensaje al terminar el conteo.
  const countdown = (deadline,elem,finalMessage) => {
    const el = document.getElementById(elem);
    const timerUpdate = setInterval( () => {
      let t = getRemainingTime(deadline);
      el.innerHTML = `${t.remainMinutes}:${t.remainSeconds}`;
  
      if(t.remainTime <= 1) {
        clearInterval(timerUpdate);
        el.innerHTML = finalMessage;
      } 
  
    }, 1000)
  };

  