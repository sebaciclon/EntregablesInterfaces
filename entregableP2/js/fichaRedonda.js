"use strict";

/**@type {HTMLCanvasElement} */

class FichaRedonda extends Ficha{

    constructor(posX, posY, radio, fill, ctx) {
        super(posX, posY, fill, ctx);
        this.radio = radio;
    }

    getRadio() {
        return this.radio;
    }

    draw() {
        super.draw();
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);
        this.ctx.fill();

        if(this.resaltado === true) {
            this.ctx.strokeStyle = this.resaltadoEstilo;
            this.ctx.lineWidth = 5;
            this.ctx.stroke();
        }
        this.ctx.closePath();
    }

    isPointInside(x, y) {
        let x1 = this.posX - x;
        let y1 = this.posY - y;
        return Math.sqrt(x1 * x1 + y1 * y1) < this.radio;
    }

}
