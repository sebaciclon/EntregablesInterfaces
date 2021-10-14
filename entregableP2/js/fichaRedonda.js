"use strict";

/**@type {HTMLCanvasElement} */

class FichaRedonda extends Ficha{

    //CONSTRUCTOR DE LA CLASE QUE EXTIENDE DE FICHA
    constructor(posX, posY, radio, fill, ctx, jugador, num) {
        super(posX, posY, fill, ctx, jugador, num);
        this.radio = radio;
    }

    //METODO PARA OBTENER EL RADIO DE LA FICHA
    getRadio() {
        return this.radio;
    }

    //METODO PARA DIBUJAR
    draw() {
        super.draw();
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);
        this.ctx.fill();
        
        this.ctx.drawImage(this.fill, this.posX - this.radio, this.posY - this.radio, this.radio * 2, this.radio * 2);
        if(this.resaltado === true) {
            this.ctx.strokeStyle = this.resaltadoEstilo;
            this.ctx.lineWidth = 5;
            this.ctx.stroke();
        }
        this.ctx.closePath();
        
    }

    //METODO QUE DICE SI EL MOUSE ESTA DENTRO DE LA FICHA O NO
    isPointInside(x, y) {
        let x1 = this.posX - x;
        let y1 = this.posY - y;
        return Math.sqrt(x1 * x1 + y1 * y1) < this.radio;
    }

}

